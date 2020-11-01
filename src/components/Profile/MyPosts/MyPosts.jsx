import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let newPostElement = React.createRef();

    let AddPost = () => {
        let text = newPostElement.current.value;
        props.addPost();
    }

    let postsElement = props.posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likeCount}/>)
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