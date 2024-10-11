import { FC } from "react";
import Header from "../header";
import styles from "./MainLayout.module.scss";
import LeftSideBar from "../LeftSideBar";
import AuthProvider from "./AuthLayout";
import { Outlet, useLocation } from "react-router-dom";
import AuthModal from "../UI/AuthModal";
import { useStoreAuthLayout } from "./layoutStore";
import CreatorDashboard from "../CreatorDashboard";

const MainLayout: FC = () => {
  const openModal = useStoreAuthLayout((store) => store.openModal);
  const { pathname } = useLocation();
  const isAdminPanel = pathname.indexOf("Profile") >= 0;
  return (
    <AuthProvider>
      <div className={styles.layout}>
        <Header isAdminPanel={isAdminPanel} />
        <div>
          {isAdminPanel ? <CreatorDashboard/> : <LeftSideBar />}
          <Outlet />
        </div>
      </div>
      {openModal && <AuthModal />}
    </AuthProvider>
  );
};

export default MainLayout;
