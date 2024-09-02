import {ChangeEvent, FC, useEffect, useState} from 'react';
import styles from './FilterLine.module.scss'
import {useStoreMainPage} from "../store";
import Select from "../../../UI/Select";
import SearchImg from '../assets/SearchGray.png'
import {useDebounce} from "../../../../hooks/useDebounce";
import {StreamServices} from "../../../../services/stream.services";

const FilterLine: FC = () => {
    const [value,setValue] = useState('');
    const setSearchTagValue = useStoreMainPage((store) => store.setSearchTagValue)
    const setVideosLive = useStoreMainPage((store) => store.setStreams)
    const videosLive = useStoreMainPage((store) => store.streams)
    const debounce = useDebounce(value, 1000);
    const onSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        setSearchTagValue(debounce)
    }, [debounce])

    useEffect(() => {
        if (debounce !== '') {
            const findVideos = videosLive.filter((video) =>
                video?.attributes?.categoryGame?.toLowerCase().includes(debounce.toLowerCase()))
            setVideosLive(findVideos)
        } else {
            StreamServices.getStreamers().then(({data}) => {
                setVideosLive(data.data)
            })
        }
    }, [debounce])



    return (
        <div className={styles.filterLine}>
            <div>
                <Select title="Language" options={[{title: 'English'}, {title: 'Russian'}]}/>
                <div className={styles.searchInput}>
                    <img src={SearchImg} alt="Logo"/>
                    <input type="text" value={value} onChange={onSearchValue} placeholder="Search Tags"/>
                </div>
            </div>
            <div>
                <h5 role="sortBy">Sort by</h5>
                <Select title="Recommended For You" options={[{title: 'Recommended For You'}, {title: 'For You'}]}/>
            </div>
        </div>
    );
}

export default FilterLine;