import React from "react";
import s from './Post.module.css'

const Post = (props ) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg" alt=""/>
            <p>{props.message}</p>
            <div>
                <span>like: {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;
