import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (

        <BrowserRouter>
            <div className="app-wrapper">
                  <Header/>
                <Navbar state={props.store}/>
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
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
