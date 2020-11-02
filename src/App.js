import React from 'react';
import './App.scss';
import Content from "./template/topics"
import Authorization from "./pages/authorization";
import Header from "./pages/header";
import Footer from "./pages/footer";
import {
    Switch,
    Route,
} from "react-router-dom";
import routes from "./constants/routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Content/>
                </Route>
                <Route path={routes.AUTHORIZATION}>
                    <Authorization/>
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
