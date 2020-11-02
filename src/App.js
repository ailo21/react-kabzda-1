import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";

function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                  <Header/>
                <Navbar state={props.state.siteBar}/>
                <div className="app-wrpper-comtent">

                    <Route exact  path='/dialogs' render={()=>
                        <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />
                    }/>
                    <Route path='/profile'
                           render={()=><Profile
                                        state={props.state.profilePage}
                                        dispatch={props.dispatch}
                           />}/>

                    <Route path='/news' component={News}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
