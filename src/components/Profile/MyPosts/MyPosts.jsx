import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../util/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const MyPosts = React.memo(props => {
        let postsElement =
            props.posts.map((post) => <Post key={post.id} message={post.message} likesCount={post.likeCount}/>)


        let addNewPost = (formData) => {
            props.addPost(formData.newPostText);
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <PostReduxForm onSubmit={addNewPost}/>
                </div>
                {postsElement}
            </div>
        )
    }
)
let maxLength10 = maxLengthCreator(10);
const PostForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={'newPostText'}
                    validate={[required, maxLength10]}/>
            </div>
            <div>
                <button type={'submit'}>Add post</button>
            </div>
        </form>
    );
}
const PostReduxForm = reduxForm({form: "PostForm"})(PostForm);
export default MyPosts;