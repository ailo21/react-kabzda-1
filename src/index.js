import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

let renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App
                    store={props}
                />
            </Provider>

        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store);

store.subscribe(() => {
    // let state = store.getState();
    renderEntireTree(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
