import {FC, useEffect, useState} from 'react';
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {UserServices} from "../../../services/user.services";
import {useParams} from "react-router-dom";
import {useStoreProfilePage} from "./store";
import HeaderProfilePage from "./HeaderProfilePage";
import styles from './ProfileStreamerPage.module.scss'
import BlockSelect from "./BlockSelect";
import AboutBlock from "../../UI/AboutBlock";
import HomeBlock from "./HomeBlock";

export enum SelectBlockEnum {
    Home = "Home",
    About = "About"
}
const ProfileStreamerPage: FC = () => {
    const userAuth = useStoreAuthLayout((store) => store.user)
    const setProfileUser = useStoreProfilePage((store) => store.setProfileUser)
    const userProfile = useStoreProfilePage((store) => store.profileUser)
    const param = useParams<{id:string}>()
    const [selectBlock,setSelectBlock] = useState<SelectBlockEnum>(SelectBlockEnum.Home)
    useEffect(() => {
        if (userAuth?.id){
            UserServices.getUser(Number(param.id))
                .then(({data}) => {
                    setProfileUser(data)
                })
        }
    },[userAuth])
    const switchSelectBlock = () => {
        switch (selectBlock){
            case 'About':
                return <AboutBlock user={userProfile}/>
            break;
            default:
                return <HomeBlock/>
        }

    }
    return (
        <main className={styles.ProfileStreamerPage}>
            <HeaderProfilePage/>
            <BlockSelect selectBlock={selectBlock} setSelectBlock={setSelectBlock}/>
            {switchSelectBlock()}
        </main>
    );
}

export default ProfileStreamerPage;