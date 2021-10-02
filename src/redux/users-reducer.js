import {userAPI} from "../api/api";
import {updateObjectInArray} from "../util/object-helpers";

const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNTER = 'SET_TOTAL_USER_COUNTER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    FollowingProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            let currentIsFollow = state.users.filter(f => f.id === action.userId)[0].followed;
            debugger;
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id",{followed:!currentIsFollow})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: !u.followed}
                //     }
                //     return u;
                // }),
            }
        case SET_USER:
            return {...state, users: [...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNTER:
            return {...state, totalUserCount: action.totalUserCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.FollowingProgress, action.userId]
                    : state.FollowingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followToggle = (userId) => ({type: FOLLOW_TOGGLE, userId});
export const setUsers = (users) => ({type: SET_USER, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUserCounter = (totalUserCount) => ({type: SET_TOTAL_USER_COUNTER, totalUserCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkCreator = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page))
        let data = await userAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCounter(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(toggleIsFollowingProgress(true, userId))

    if (apiMethod.resultCode === 0) {
        dispatch(followToggle(userId))
    }
    dispatch(toggleIsFollowingProgress(false, userId));
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = await userAPI.deleteFollow(userId);
        await followUnfollowFlow(dispatch, userId, apiMethod);
    }
}
export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = await userAPI.postFollow(userId);
        await followUnfollowFlow(dispatch, userId, apiMethod);
    }
}

export default usersReducer;