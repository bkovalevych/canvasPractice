import {Button, Form, Nav} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import routePaths from "../../../constants/routes";
import {Link} from "react-router-dom";
import "../auth.css"

export const SignInForm = ({signIn}) => {

    const submit = useCallback(event => {
        setValidated(true);
        event.preventDefault();
        let form = event.currentTarget;
        let args = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value
        }
        if(form.checkValidity()){
            signIn(args);
        }

    }, [signIn]);

    const [validated, setValidated] = useState(false)

    return (
        <>
            <div className="elementOuterContainer">
                <div className="elementInnerContainer">
                    <Nav justify variant="tabs" activeKey={routePaths.SIGN_IN}>
                        <Nav.Item>
                            <Nav.Link eventKey={`${routePaths.SIGN_IN}`} as={Link}
                                      to={`${routePaths.SIGN_IN}`}>Sign in</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`${routePaths.SIGN_UP}`} as={Link}
                                      to={`${routePaths.SIGN_UP}`}>Sign up</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="pt-4 pb-4">
                        <Form noValidate validated={validated} onSubmit={submit}>
                            <Form.Group controlId="formBasicEmail">
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
                    </div>
                </div>
            </div>
        </>
    )
}