import {FC} from 'react';
import {IStreamUser} from "../../../../types";
import {convertImgUrl} from "../../../../utils/convertImgUrl";
import {useNavigate} from "react-router-dom";

const SearchUserCard: FC<{ user: IStreamUser }> = ({user}) => {
    const nav = useNavigate()
    return (
        <div
            onClick={() => nav(`/profile-streamer/${user.id}`)}
        >
            <img src={convertImgUrl(user.avatar)} alt="Logo"/>
            <div>
                <h4>{user.username}</h4>
                <h6>{user.followers.length} followers</h6>
            </div>
        </div>
    );
}

export default SearchUserCard;