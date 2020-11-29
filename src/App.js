import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer store={props.store}/>
                <div className="app-wrpper-comtent">

                    <Route exact path='/dialogs' render={() =>
                        <DialogsContainer
                            store={props.store}
                        />
                    }/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer
                               store={props.store}
                           />}/>

                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
