import {FC, memo, useEffect, useMemo, useState} from "react";
import styles from "./BrandBlock.module.scss";
import AvatarImgDefault from "../../../../../assets/Avatar.svg";
import { useStoreAuthLayout } from "../../../../layouts/layoutStore";
import DefaultInput from "../../../../UI/Inputs/DefaultInput";
import { ColorPicker, Radio, Text } from "@mantine/core";
import { convertImgUrl } from "../../../../../utils/convertImgUrl";
import { IUpdateProfileDto } from "../index";
import { UserServices } from "../../../../../services/user.services";

export enum SelectProfileBg {
  generatedBg = "generatedBg",
  customBg = "customBg",
}

const BrandBlock: FC<{
  handleUpdateProfile: (dto: IUpdateProfileDto) => void;
}> = ({ handleUpdateProfile }) => {
  const userAuth = useStoreAuthLayout((store) => store.user);
  const countRepeatNickName:number = 6
  const setIsUpdateUserStorage = useStoreAuthLayout(
    (store) => store.setIsUpdateUserStorage,
  );
  const isUpdateUserStorage = useStoreAuthLayout(
    (store) => store.isUpdateUserStorage,
  );
  const [avatar, setAvatar] = useState<string>("");
  const [profileBg, setProfileBg] = useState<{ color: string; img: string }>({
    color: "#4673a3ff",
    img: "",
  });
  const [selectProfileBackground, setSelectProfileBackground] = useState<
    SelectProfileBg | string
  >(SelectProfileBg.generatedBg);
  const isImgBg = useMemo(
    () =>
      userAuth?.profileInfo?.profileBg
        ? userAuth?.profileInfo?.profileBg.indexOf("/assets") >= 0
        : false,
    [userAuth],
  );
  const dtoProfile = useMemo(
    () => ({
      profileBg:
        selectProfileBackground === SelectProfileBg.generatedBg
          ? profileBg.color
          : profileBg.img,
    }),
    [profileBg],
  );
    const repeatNickName = () => {
        const arrRepeat:number[] = []
        for (let i = 0; i < countRepeatNickName; i++) {
            arrRepeat.push(i)
        }
        return arrRepeat
    }
  const handleUpdateAvatar = () => {
    UserServices.updateUser(Number(userAuth?.id), { avatar: avatar });
    setIsUpdateUserStorage(!isUpdateUserStorage);
  };

  useEffect(() => {
    if (userAuth) {
      const avatarUserSrc = userAuth.avatar ? userAuth?.avatar : "";
      setAvatar(avatarUserSrc);
      const customBg = userAuth?.profileInfo?.profileBg
        ? isImgBg
          ? {
              ...profileBg,
              img: userAuth.profileInfo.profileBg,
            }
          : { ...profileBg, color: userAuth.profileInfo.profileBg }
        : profileBg;
      setProfileBg(customBg);
    }
  }, [userAuth]);

  return (
    <div className={styles.brandBlock}>
      <h3>Profile Picture</h3>
      <div>
        <img
          src={
            userAuth?.avatar
              ? convertImgUrl(userAuth?.avatar)
              : AvatarImgDefault
          }
          alt="Logo"
        />
        <div>
          <DefaultInput
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <h5>Must be JPEG,PNG or GIF and cannot exceed 10mb</h5>
        </div>
      </div>
      <button className={styles.button} onClick={handleUpdateAvatar}>
        Save
      </button>
      <h3>Profile Accent Color</h3>
      <div>
        <h5>
          Choose an accent color to highlight your personal brand around Twitch
          and in your channel elements
        </h5>
        <div>
          <div>
            <ColorPicker
              format="hexa"
              value={profileBg.color}
              onChange={(e) => setProfileBg({ ...profileBg, color: e })}
            />
            <Text>{profileBg.color}</Text>
          </div>
        </div>
        <h4>Profile Banner</h4>
        <h5>Customize your channel home background</h5>
        <Radio.Group
          name="selectBg"
          withAsterisk
          value={selectProfileBackground}
          onChange={setSelectProfileBackground}
        >
          <Radio
            value={SelectProfileBg.generatedBg}
            label="GeneratedBackground"
          />
          <div
            style={{ backgroundColor: profileBg.color }}
            className={styles.bgGeneratedNickName}
          >
            {repeatNickName().map((el) => (
              <div key={el}>
                <h3>{userAuth?.username}</h3>
                <h3>{userAuth?.username}</h3>
                <h3>{userAuth?.username}</h3>
              </div>
            ))}
          </div>
          <h4 className={styles.bgGeneratedTitle}>
            Change the color of the background by selecting a profile accent
            color above
          </h4>
          <Radio value={SelectProfileBg.customBg} label="CustomImage" />
          <div className={styles.bgGenerated}>
            {profileBg.img && <img src={profileBg.img} />}
          </div>
          <h4 className={styles.bgGeneratedTitle}>
            File format: JPEG,PNG,GIF (recommended 1200x480, max 10MB){" "}
          </h4>
          <DefaultInput
            style={{ width: "200px" }}
            value={profileBg.img}
            onChange={(e) =>
              setProfileBg({ ...profileBg, img: e.target.value })
            }
          />
        </Radio.Group>
      </div>
      <button
        className={styles.button}
        onClick={() => handleUpdateProfile(dtoProfile)}
      >
        Save
      </button>
    </div>
  );
};

export default memo(BrandBlock);