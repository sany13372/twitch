import {FC} from 'react';
import styles from './header.module.scss'
import LeftBlock from "./LeftBlock";
import SearchLine from "./SearchLine";
import RightBlock from "./RightBlock";
const Header: FC = () => {
    return (
        <header className={styles.header}>
            <LeftBlock/>
            <SearchLine/>
            <RightBlock/>
        </header>
    );
}

export default Header;