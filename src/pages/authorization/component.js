import React, {useCallback, useState} from "react";
import {Nav, Form, Button} from "react-bootstrap";
import styles from "./style.module.scss";
import {useLocation, useRouteMatch} from "react-router";
import {Link, Switch, Route, Redirect} from "react-router-dom";
import routePaths from "../../constants/routes"
import "./auth.css"
import SignIn from "./signIn";

export const Authorization = ({signUp}) => {
    const handleSignUp = useCallback(event => {
        setValidated(true);
        event.preventDefault();

        signUp({
            email: "email",
            password: "password"
        });
    }, []);

    const [validated, setValidated] = useState(false)
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

                                <Form noValidate validated={validated} onSubmit={handleSignUp}>
                                    <Form.Group controlId="singUpForm">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            required
                                            name='email'
                                            type="email"
                                            placeholder="Enter email"/>
                                        <Form.Control.Feedback type="invalid">
                                            Invalid Email
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control
                                            required
                                            name='fullName'
                                            type="text"
                                            placeholder="Enter email"/>
                                        <Form.Control.Feedback type="invalid">
                                            Invalid Name
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            required
                                            name="password"
                                            type="password"
                                            placeholder="Enter password"/>
                                    </Form.Group>
                                    <Button variant="info" type="submit" block>
                                        Submit
                                    </Button>
                                </Form>

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
