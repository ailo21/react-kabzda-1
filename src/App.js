import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                  <Header/>
                <NavbarContainer store={props.store}/>
                <div className="app-wrpper-comtent">

                    <Route exact  path='/dialogs' render={()=>
                        <DialogsContainer
                            store={props.store}
                        />
                    }/>
                    <Route path='/profile'
                           render={()=><Profile
                                       store={props.store}
                           />}/>

                    <Route path='/news' component={News}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
