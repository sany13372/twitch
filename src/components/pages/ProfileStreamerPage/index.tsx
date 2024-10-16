import {FC, useCallback, useEffect, useMemo, useState} from "react";
import { useStoreAuthLayout } from "../../layouts/layoutStore";
import { UserServices } from "../../../services/user.services";
import { useParams } from "react-router-dom";
import { useStoreProfilePage } from "./store";
import HeaderProfilePage from "./HeaderProfilePage";
import styles from "./ProfileStreamerPage.module.scss";
import BlockSelect from "./BlockSelect";
import AboutBlock from "../../UI/AboutBlock";
import HomeBlock from "./HomeBlock";
import { Skeleton } from "@mantine/core";

export enum SelectBlockEnum {
  Home = "Home",
  About = "About",
}
const ProfileStreamerPage: FC = () => {
  const userAuth = useStoreAuthLayout((store) => store.user);
  const setProfileUser = useStoreProfilePage((store) => store.setProfileUser);
  const userProfile = useStoreProfilePage((store) => store.profileUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const param = useParams<{ id: string }>();
  const isImgBg = useMemo(
    () =>
      userProfile?.profileInfo?.profileBg
        ? userProfile?.profileInfo?.profileBg.indexOf("/assets") >= 0
        : false,
    [userProfile],
  );
  const backgroundMain = useMemo(
    () =>
      userProfile?.profileInfo?.profileBg
        ? {
            background: isImgBg
              ? `url(/${userProfile?.profileInfo?.profileBg}) center/100% no-repeat`
              : (userProfile?.profileInfo?.profileBg ?? ""),
          }
        : {},
    [userProfile],
  );

  const [selectBlock, setSelectBlock] = useState<SelectBlockEnum>(
    SelectBlockEnum.Home,
  );
  useEffect(() => {
    if (userAuth?.id) {
      setIsLoading(true);
      UserServices.getUser(Number(param.id))
        .then(({ data }) => {
          setProfileUser(data);
        })
        .finally(() => setIsLoading(false));
    }
  }, [userAuth]);
  const switchSelectBlock = useCallback(() => {
    switch (selectBlock) {
      case "About":
        return <AboutBlock user={userProfile} />;
        break;
      default:
        return <HomeBlock />;
    }
  } ,[selectBlock,userProfile])

  const renderNickName = () => {
    const ind: number[] = [];
    for (let i = 0; i < 30; i++) {
      ind.push(i);
    }
    return ind.map(() => (
      <div>
        {ind.map(() => (
          <h1>{userProfile?.username}</h1>
        ))}
      </div>
    ));
  };

  return (
    <Skeleton visible={isLoading}>
      <main className={styles.ProfileStreamerPage} style={backgroundMain}>
        {!isImgBg && (
          <div className={styles.bgNickName}>{renderNickName()}</div>
        )}
        <div>
          <HeaderProfilePage />
          <BlockSelect
            selectBlock={selectBlock}
            setSelectBlock={setSelectBlock}
          />
          {switchSelectBlock()}
        </div>
      </main>
    </Skeleton>
  );
};

export default ProfileStreamerPage;