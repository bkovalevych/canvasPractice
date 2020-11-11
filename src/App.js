import React, {useEffect} from 'react';
import './App.scss';
import Content from "./template/topics"
import Header from "./pages/header";
import Footer from "./pages/footer";
import {Switch, Route} from "react-router-dom";
import routes from "./constants/routes";
import RedirectWrapper from "./utils/redirectWrapper";
import Profile from "./pages/profile";
import get from "lodash/get";
import {connect} from "react-redux";
import SignIn from "./pages/authorization/signIn"
import SignUp from "./pages/authorization/signUp"
import {getUserAction} from "./redux/actions/user";

function App(props) {
    useEffect(() => { props.getUser() }, [])
    return (
        <div className="App">
            <Header/>
            <div>
                <Switch>
                    <Route exact path={routes.ROOT}>
                        <Content/>
                    </Route>
                    <RedirectWrapper path={routes.EXERCISE} accessible={props.isLoggedIn}
                                     pathname={routes.SIGN_IN}>
                        <Content/>
                    </RedirectWrapper>
                    <RedirectWrapper path={routes.PROFILE} accessible={props.isLoggedIn}
                                     pathname={routes.SIGN_IN}>
                        <Profile/>
                    </RedirectWrapper>
                    <RedirectWrapper path={routes.SIGN_IN} accessible={!props.isLoggedIn}
                                     pathname={routes.PROFILE}>
                        <SignIn/>
                    </RedirectWrapper>
                    <RedirectWrapper path={routes.SIGN_UP} accessible={!props.isLoggedIn}
                                     pathname={routes.PROFILE}>
                        <SignUp/>
                    </RedirectWrapper>
                    <Route>
                        <div>
                            <h1>NOT FOUND</h1>
                        </div>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export const mapStateToProps = (state) => {
    return {
        isLoggedIn: get(state, "user.isLoggedIn", false)
    };
};

export const mapDispatchToProps = (dispatch) => ({
    getUser: () => dispatch(getUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
