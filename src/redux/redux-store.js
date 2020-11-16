import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers;
reducers = combineReducers({
    siteBar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: usersReducer
});

let store = createStore(reducers);

export default store;