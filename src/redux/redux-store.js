import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleweare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";

let reducer;
reducer = combineReducers({
    siteBar: sidebarReducer,
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    userPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,  composeEnhancers(
    applyMiddleware(thunkMiddleweare)
));

// let store = createStore(reducers, applyMiddleware(thunkMiddleweare));
window.store = store;

export default store;