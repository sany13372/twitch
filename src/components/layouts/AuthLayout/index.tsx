import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { removeTokensStorage } from "../../../utils/authHelper";
import { useStoreAuthLayout } from "../layoutStore";
import Cookies from "js-cookie";
import { UserServices } from "../../../services/user.services";

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const setUser = useStoreAuthLayout((store) => store.setUser);
  const isUpdateUserStorage = useStoreAuthLayout(
    (store) => store.isUpdateUserStorage,
  );
  const { pathname } = useLocation();
  const nav = useNavigate();

  const logout = () => {
    removeTokensStorage();
    setUser(null);
    nav("/");
  };

  useEffect(() => {
    const readyUser = localStorage.getItem("user");
    const accessToken = Cookies.get("accessToken");
    if (readyUser && accessToken) {
      UserServices.getUser(JSON.parse(readyUser).id).then(({ data }) => {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      });
    }

    if (!accessToken && readyUser) logout();
  }, [pathname, isUpdateUserStorage]); // eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
};

export default AuthProvider;