import {Button, Form, Nav} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import routePaths from "../../../constants/routes";
import {Link} from "react-router-dom";
import "../auth.scss"

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
            <div className="authWrapper">
                <div className="auth">
                    <Nav justify variant="tabs" activeKey={routePaths.SIGN_IN}>
                        <Nav.Item>
                            <Nav.Link eventKey={`${routePaths.SIGN_IN}`} as={Link}
                                      to={`${routePaths.SIGN_IN}`}>Вхід</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={`${routePaths.SIGN_UP}`} as={Link}
                                      to={`${routePaths.SIGN_UP}`}>Реєстрація</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="pt-4 pb-4">
                        <Form noValidate validated={validated} onSubmit={submit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email адреса</Form.Label>
                                <Form.Control
                                    required
                                    name='email'
                                    type="email"
                                    placeholder="email"/>
                                <Form.Control.Feedback type="invalid">
                                    Некоректний Email
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Пароль</Form.Label>
                                <Form.Control
                                    required
                                    name="password"
                                    type="password"
                                    placeholder="Введіть пароль"/>
                            </Form.Group>
                            <Button variant="info" type="submit" block>
                                Вхід
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}