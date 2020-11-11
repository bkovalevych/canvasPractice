import {Button, Form} from "react-bootstrap";
import React, {useCallback, useState} from "react";

export const SignInForm = ({signIn}) => {

    const submit = useCallback(event => {
        setValidated(true);
        event.preventDefault();
        let form = event.currentTarget;
        let args = {
            email: form.elements.email.value.trim(),
            password: form.elements.password.value
        }
        console.log(args);
        if(form.checkValidity()){
            signIn(args);
        }

    }, []);

    const [validated, setValidated] = useState(false)

    return (
        <>
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
        </>
    )
}