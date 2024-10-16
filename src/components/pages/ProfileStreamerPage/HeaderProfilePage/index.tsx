import {FC, memo, useMemo} from "react";
import { useStoreProfilePage } from "../store";
import styles from "./HeaderProfilePage.module.scss";
import { convertImgUrl } from "../../../../utils/convertImgUrl";
import HeaderActions from "./HeaderActions";
import { useStoreAuthLayout } from "../../../layouts/layoutStore";

const HeaderProfilePage: FC = () => {
  const userProfile = useStoreProfilePage((store) => store.profileUser);
  const userAuth = useStoreAuthLayout((store) => store.user);
  const isShowActions = useMemo(
    () => userProfile.id !== userAuth?.id,
    [userAuth, userProfile],
  );
  return (
    <div className={styles.headerProfile}>
      <div>
        <img src={convertImgUrl(userProfile.avatar)} alt="Logo" />
        <div>
          <h4>{userProfile.username}</h4>
          <h5>{userProfile?.followers?.length} followers</h5>
        </div>
      </div>
      {isShowActions && <HeaderActions />}
    </div>
  );
};
export default memo(HeaderProfilePage);