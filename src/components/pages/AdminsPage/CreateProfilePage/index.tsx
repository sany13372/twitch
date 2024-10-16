import {FC, memo, useState} from 'react';
import BlockSelect from "./BlockSelect";
import AboutBlock from "./AboutBlock";
import styles from './CreateProfilePage.module.scss'
import BrandBlock from "./BrandBlock/BrandBlock";
import {ProfileInfoServices} from "../../../../services/profileInfo.services";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";

export enum SelectCategoryCreateProfile {
    About = "About",
    Brand = "Brand"
}

export interface IUpdateProfileDto {
    aboutTitle?: string
    profileBg?: string
}

const CreateProfilePage: FC = () => {
    const [selectCategory, setSelectCategory] = useState<SelectCategoryCreateProfile>(SelectCategoryCreateProfile.About)
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setIsUpdateUserStorage = useStoreAuthLayout((store) => store.setIsUpdateUserStorage)
    const isUpdateUserStorage = useStoreAuthLayout((store) => store.isUpdateUserStorage)
    const handleUpdateProfile = (dto: IUpdateProfileDto) => {
        const dtoProfile = {
            aboutTitle: dto.aboutTitle ? dto.aboutTitle : userAuth?.profileInfo?.aboutTitle ?? '',
            profileBg: dto.profileBg ? dto.profileBg : userAuth?.profileInfo?.profileBg ?? ''
        }
        if (userAuth?.profileInfo?.id) {
            ProfileInfoServices.update(userAuth?.profileInfo.id, dtoProfile)
        } else {
            ProfileInfoServices.create({...dtoProfile, user: userAuth})
        }
        setIsUpdateUserStorage(!isUpdateUserStorage)
    }

    return (
        <main className={styles.CreateProfilePage}>
            <BlockSelect selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>
            {selectCategory === SelectCategoryCreateProfile.About ?
                <AboutBlock handleUpdateProfile={handleUpdateProfile}/> :
                <BrandBlock handleUpdateProfile={handleUpdateProfile}/>}
        </main>
    );
}

export default memo(CreateProfilePage);