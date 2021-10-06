import React from 'react';
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader";
import store from "./redux/redux-store";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized){return <Preloader/>}
        else
            return (

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer store={this.props.store}/>
                    <div className="app-wrpper-comtent">

                        <Route exact path='/dialogs' render={() =>
                            <DialogsContainer
                                store={this.props.store}
                            />
                        }/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer
                                   store={this.props.store}
                               />}/>

                        <Route path='/news' component={News}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>
                </div>


            );
    }
}

const mapStateToProps = (state) => ({initialized: state.app.initialized})

let AppContainer= compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const  SamuraiJSApp = (props) => {
  return  <Provider store={store}>
      <BrowserRouter>
          <AppContainer/>
      </BrowserRouter>
  </Provider>
}
 export  default  SamuraiJSApp;