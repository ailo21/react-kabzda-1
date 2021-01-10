import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement =
        props.posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likeCount}/>)
    let newPostElement = React.createRef();

    let AddPost = () => {
        props.addPost();
    }

    let onPostChange =()=>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        ref={newPostElement}
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>
            </div>
            {postsElement}
        </div>
    )
}
export default MyPosts;