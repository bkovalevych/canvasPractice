import {Button, Form, Nav} from "react-bootstrap";
import React, {useCallback, useEffect, useRef, useState} from "react";
import routePaths from "../../../constants/routes";
import {Link} from "react-router-dom";
import "../auth.scss"

export const SignUpForm = ({signUp, signIn, isSignedUp}) => {
    const refForm = useRef();
    const submit = useCallback(event => {
        setValidated(true);
        event.preventDefault();
        let form = event.currentTarget;
        let args = {
            email: form.elements.email.value.trim(),
            firstName: form.elements.firstName.value,
            lastName: form.elements.lastName.value,
            password: form.elements.password.value
        }
        if(form.checkValidity()){
            signUp(args);
        }

    }, [signUp]);

    useEffect(() => {
        if (isSignedUp === true) {
            debugger;
            let form = refForm.current;
            let args = {
                email: form.elements.email.value.trim(),
                password: form.elements.password.value
            }
            signIn(args);
        }
    }, [isSignedUp])

    const [validated, setValidated] = useState(false)

    return (
        <>
            <div className="authWrapper">
                <div className="auth">
                    <Nav justify variant="tabs" activeKey={routePaths.SIGN_UP}>
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
                        <Form ref={refForm} noValidate validated={validated} onSubmit={submit}>
                            <Form.Group controlId="singUpForm">
                                <Form.Label>Email адреса</Form.Label>
                                <Form.Control
                                    required
                                    name='email'
                                    type="email"
                                    placeholder="Введіть email"/>
                                <Form.Control.Feedback type="invalid">
                                    Некоректний Email
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicFirstName">
                                <Form.Label>Ім'я</Form.Label>
                                <Form.Control
                                    required
                                    name='firstName'
                                    type="text"
                                    placeholder="Введіть ім'я"/>
                                <Form.Control.Feedback type="invalid">
                                    Некоректне ім'я
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicLastName">
                                <Form.Label>Прізвище</Form.Label>
                                <Form.Control
                                    required
                                    name='lastName'
                                    type="text"
                                    placeholder="Введіть прізвище"/>
                                <Form.Control.Feedback type="invalid">
                                    Некоректне прізвище
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
                                Зареєструватися
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}