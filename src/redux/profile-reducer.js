const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'Ary you ready?', likeCount: 0},
        {id: 3, message: 'It`s my first post', likeCount: 2},
    ],
    newPostText: 'test text'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }

}
export default profileReducer;