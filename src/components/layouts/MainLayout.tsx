import {FC} from 'react';
import Header from "../header";
import styles from './MainLayout.module.scss'
import LeftSideBar from "../LeftSideBar";
import AuthProvider from "./AuthLayout";
import {Outlet} from "react-router-dom";
import AuthModal from "../UI/AuthModal";
import {useStoreAuthLayout} from "./layoutStore";

const MainLayout: FC = () => {
    const openModal = useStoreAuthLayout((store) => store.openModal)
    return (
        <AuthProvider>
            <div className={styles.layout}>
                <Header/>
                <div>
                    <LeftSideBar/>
                    <Outlet/>
                </div>
            </div>
            {openModal && <AuthModal/>}
        </AuthProvider>
    );
}

export default MainLayout;