import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import routePaths from "../../constants/routes";
import "./style.scss";

export const Header = ({isLoggedIn, email, logout}) => {

    return (
        <div className="header">
            <Navbar expand="lg" bg="light" variant="light" collapseOnSelect={true}>
                <Navbar.Brand as={Link} to="/">
                    EGeometry
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to={routePaths.EXERCISE}>Exercise</Nav.Link>
                        {isLoggedIn ?
                                <NavDropdown title="Account" id="account-tabs">
                                    <NavDropdown.Item  as={Link} to={routePaths.PROFILE}>{email}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => logout()}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            :
                                <NavDropdown title="Account" id="account-tabs">
                                    <NavDropdown.Item as={Link} to={routePaths.SIGN_IN}>Sign in</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={routePaths.SIGN_UP}>Sign up</NavDropdown.Item>
                                </NavDropdown>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}