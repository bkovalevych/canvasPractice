import React from "react";
import {Nav} from "react-bootstrap";
import {useLocation, useRouteMatch} from "react-router";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import routePaths from "../../constants/routes"
import "./auth.css"
import SignIn from "./signIn";
import SignUp from "./signUp";

export const Authorization = () => {

    let location = useLocation()
    let match = useRouteMatch()

    return (
        <>
            <div className="elementOuterContainer">
                <div className="elementInnerContainer">
                    <Nav justify variant="tabs" activeKey={`${location.pathname}`}>
                        <Nav.Item>
                            <Nav.Link eventKey={`${match.path}${routePaths.SIGN_IN}`} as={Link}
                                      to={`${match.path}${routePaths.SIGN_IN}`}>Sign in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`${match.path}${routePaths.SIGN_UP}`} as={Link}
                                      to={`${match.path}${routePaths.SIGN_UP}`}>Sign up</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="pt-4 pb-4">
                        <Switch>
                            <Route path={`${match.path}${routePaths.SIGN_IN}`}>

                                <SignIn/>

                            </Route>
                            <Route path={`${match.path}${routePaths.SIGN_UP}`}>

                                <SignUp/>

                            </Route>
                            <Route>
                                <Redirect to={`${match.path}${routePaths.SIGN_IN}`}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
};
