import {Button, Form, Nav} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import routePaths from "../../../constants/routes";
import {Link} from "react-router-dom";
import "../auth.scss"

export const SignUpForm = ({signUp}) => {

    const submit = useCallback(event => {
        setValidated(true);
        event.preventDefault();
        let form = event.currentTarget;
        let args = {
            email: form.elements.email.value.trim(),
            fullName: form.elements.fullName.value,
            password: form.elements.password.value
        }
        if(form.checkValidity()){
            signUp(args);
        }

    }, [signUp]);

    const [validated, setValidated] = useState(false)

    return (
        <>
            <div className="authWrapper">
                <div className="auth">
                    <Nav justify variant="tabs" activeKey={routePaths.SIGN_UP}>
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
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    required
                                    name='fullName'
                                    type="text"
                                    placeholder="Enter full name"/>
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
                    </div>
                </div>
            </div>
        </>
    )
}