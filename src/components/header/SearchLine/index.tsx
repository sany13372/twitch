import {ChangeEvent, FC, memo, useEffect, useState} from 'react';
import SearchImg from '../assets/Search.svg'
import styles from './SearchLine.module.scss'
import {IStreamUser} from "../../../types";
import {useStoreAuthLayout} from "../../layouts/layoutStore";
import {UserServices} from "../../../services/user.services";
import {useDebounce} from "../../../hooks/useDebounce";
import SearchUserCard from "./SearchUserCard";
import {useClickOutside} from "../../../hooks/useClickOutside";

const SearchLine: FC = () => {
    const [searchText, setSearchText] = useState<string>('')
    const searchHandle = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)
    const [users, setUsers] = useState<IStreamUser[]>([])
    const userAuth = useStoreAuthLayout((store) => store)
    const debounce = useDebounce(searchText, 1000);
    const [isOpened,setIsOpened] = useState<boolean>(false)
    const refOutside = useClickOutside(() => setIsOpened(false));


    useEffect(() => {
        if (userAuth) {
            UserServices.getUsers()
                .then(({data}) => setUsers(data))
        }
    }, [userAuth])

    useEffect(() => {
        if (debounce) {
           const filtredUsers = users.filter((user) => user.username.toLowerCase().includes(debounce.toLowerCase()))
            setUsers(filtredUsers)
        } else {
            UserServices.getUsers()
                .then(({data}) => setUsers(data))
        }
    }, [debounce])
    return (
        <div className={styles.searchLine}>
            <input type="text" onClick={() => setIsOpened(true)} value={searchText} onChange={searchHandle} placeholder="Search"/>
            <button><img src={SearchImg} alt="Logo"/></button>
            {isOpened && <div ref={refOutside} className={styles.dropDownSearch}>{users.map((user) => <SearchUserCard user={user}/>)}</div>}
        </div>
    );
}

export default memo(SearchLine);