import {FC, useEffect, useState} from 'react';
import styles from './AboutBlock.module.scss'
import {Skeleton} from "@mantine/core";
import {IStreamsData, IStreamUser} from "../../../types";
import {UserServices} from "../../../services/user.services";

const AboutBlock: FC<{ user: IStreamsData | IStreamUser }> = ({user}) => {
    const [aboutUser, setAboutUser] = useState({} as IStreamUser)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        if (user) {
            setIsLoading(true)
            UserServices.getUser(user.attributes ? user.attributes.user.data.id : user.id)
                .then(({data}) => setAboutUser(data))
                .finally(() => setIsLoading(false))
        }
    }, [user])
    return (
        <div className={styles.aboutBlock}>
            <Skeleton visible={isLoading}>
                <h2 className={styles.aboutTitle}>About {aboutUser?.username}</h2>
                <h4>{aboutUser?.followers?.length} <span className={styles.miniTitle}>followers</span></h4>
                <p>Hi, hello</p>
            </Skeleton>
        </div>
    );
}

export default AboutBlock;