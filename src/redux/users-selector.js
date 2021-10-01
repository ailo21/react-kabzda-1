import {createSelector} from "reselect";

export const getUsersSelector = (state) => {
    return state.userPage.users;
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true);
})
export const getPageSize = (state) => {
    return state.userPage.pageSize;
}
export const getTotalUserCount = (state) => {
    return state.userPage.totalUserCount;
}
export const getCurrentPage = (state) => {
    return state.userPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.userPage.isFetching;
}
export const getIsFollowingProgress = (state) => {
    return state.userPage.isFollowingProgress;
}
