import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';

export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const deletePost = (postId) => ({type: DELETE_POST,postId})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {

            dispatch(setStatus(response.data))
        })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode===0){
                dispatch(setStatus(status))
            }
        })
}


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeCount: 5},
        {id: 2, message: 'Ary you ready?', likeCount: 0},
        {id: 3, message: 'It`s my first post', likeCount: 2},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case DELETE_POST:{
            return {
                ...state,
                posts: state.posts.filter(p=>p.id!=action.postId)
            }
        }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile

            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status

            }
        default:
            return state;
    }

}
export default profileReducer;