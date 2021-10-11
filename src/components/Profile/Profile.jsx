import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    const isMyPage = !props.match.params.userId;
    return (
        <div>
            <ProfileInfo
                isOwner={isMyPage}
                savePhoto={props.savePhoto}
                profile={props.profile} status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}
export default Profile;