const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USER='SET_USER';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW_TOGGLE:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                }),
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followToggleAC = (userId) => ({type: FOLLOW_TOGGLE, userId});
export const setUsersAC = (users) => ({type: SET_USER, users});
export default usersReducer;