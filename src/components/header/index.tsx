import {FC} from 'react';
import styles from './header.module.scss'
import LeftBlock from "./LeftBlock";
import SearchLine from "./SearchLine";
import RightBlock from "./RightBlock";
const Header: FC<{isAdminPanel:boolean}> = ({isAdminPanel}) => {
    return (
        <header className={styles.header}>
            {!isAdminPanel && <>
                <LeftBlock/>
                <SearchLine/>
            </>}
            <RightBlock isAdminPanel={isAdminPanel}/>
        </header>
    );
}

export default Header;