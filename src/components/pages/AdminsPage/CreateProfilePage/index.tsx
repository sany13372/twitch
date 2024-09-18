import {FC, useState} from 'react';
import BlockSelect from "./BlockSelect";
import AboutBlock from "./AboutBlock";
import styles from './CreateProfilePage.module.scss'
import {UserServices} from "../../../../services/user.services";
import {useStoreAuthLayout} from "../../../layouts/layoutStore";
import {IStreamUser} from "../../../../types";

export enum SelectCategoryCreateProfile {
    About = "About",
    Brand = "Brand"
}

interface ICreateProfileDto {
    aboutTitle?: string
    avatar?:string
}

const CreateProfilePage: FC = () => {
    const [selectCategory, setSelectCategory] = useState<SelectCategoryCreateProfile>(SelectCategoryCreateProfile.About)
    const userAuth = useStoreAuthLayout(store => store.user)
    const saveProfileHandle = (dto: ICreateProfileDto) => {
        const userDto: IStreamUser = {
            ...userAuth,
            aboutTitle: dto?.aboutTitle  ? dto?.aboutTitle : userAuth?.aboutTitle ?? '',
            avatar: dto?.avatar ? dto?.avatar : userAuth?.avatar ?? '',

        }
        UserServices.updateUser(userAuth?.id,)
    }
    return (
        <main className={styles.CreateProfilePage}>
            <BlockSelect selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>
            {selectCategory === SelectCategoryCreateProfile.About ? <AboutBlock/> : <div></div>}
        </main>
    );
}

export default CreateProfilePage;