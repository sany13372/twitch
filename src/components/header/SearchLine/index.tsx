import {FC, useState} from 'react';
import SearchImg from '../assets/Search.svg'
import styles from './SearchLine.module.scss'

const SearchLine: FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    const searchHandle = (e: any) => setSearchText(e.target.value)
    return (
        <div className={styles.searchLine}>
            <input type="text" value={searchText} onChange={searchHandle} placeholder="Search"/>
            <button><img src={SearchImg} alt="Logo"/></button>
        </div>
    );
}

export default SearchLine;