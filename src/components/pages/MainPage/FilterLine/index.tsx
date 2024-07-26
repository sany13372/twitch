import {FC, useEffect, useState} from 'react';
import styles from './FilterLine.module.scss'
import {useStoreMainPage, videosDefault} from "../store";
import Select from "../../../UI/Select";
import SearchImg from '../assets/SearchGray.png'
import {useDebounce} from "../../../../hooks/useDebounce";

const FilterLine: FC = () => {
    const setSearchTagValue = useStoreMainPage((store) => store.setSearchTagValue)
    const setVideosLive = useStoreMainPage((store) => store.setLiveVideos)
    const videosLive = useStoreMainPage((store) => store.liveVideos)
    const [value, setValue] = useState<string>('')
    const debounceSearch = useDebounce(value, 1000)
    const onSearchValue = (e: any) => setValue(e.target.value)

    useEffect(() => {
        setSearchTagValue(debounceSearch)
    }, [debounceSearch])

    useEffect(() => {
        if (debounceSearch !== ''){
            const findVideos = videosLive.filter((video) =>
                video.category.find((cat) => cat.toLowerCase().includes(debounceSearch.toLowerCase())))
            setVideosLive(findVideos)
        } else {
            setVideosLive(videosDefault)
        }
    }, [debounceSearch])
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
                <h5>Sort by</h5>
                <Select title="Recommended For You" options={[{title: 'Recommended For You'}, {title: 'For You'}]}/>
            </div>
        </div>
    );
}

export default FilterLine;