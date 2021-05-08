import React, {useEffect} from 'react';
import './App.scss';
import Topics from "./pages/home"
import Header from "./pages/header";
import Footer from "./pages/footer";
import {Switch, Route} from "react-router-dom";
import routes from "./constants/routes";
import Details_good from "./pages/details_good"
import get from "lodash/get";
import {connect} from "react-redux";
import Basket from "./pages/basket"

import {getUserAction} from "./redux/actions/user";

function App(props) {
    // useEffect(() => { props.getUser({firstCheck: true}) }, [])
    return (
        <>
            <Header/>
             <div className="mainContent">
                <Switch>
                    <Route exact path={routes.ROOT}>
                        <Topics/>
                    </Route>
                    <Route path={routes.BASKET}>
                        <Basket/>
                    </Route>
                    <Route path={`${routes.DETAILS}/:goodId`}>
                        <Details_good />
                    </Route>
                    <Route>
                        <div>
                            <h1>NOT FOUND</h1>
                        </div>
                    </Route>
                </Switch>
                </div>
            <Footer/>
        </>
    );
}

export const mapStateToProps = (state) => {
    return {

    };
};

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
