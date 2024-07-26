import {FC, PropsWithChildren} from 'react';
import Header from "../header";
import styles from './MainLayout.module.scss'
import LeftSideBar from "../LeftSideBar";

interface IMainLayout extends PropsWithChildren {

}

const MainLayout: FC<IMainLayout> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            <div>
                <LeftSideBar/>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;