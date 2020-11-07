import React from "react";
import {NavDropdown, Navbar, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import routePaths from "../../constants/routes"


export const Header = () => {
    return(
        <>
            <Navbar expand="lg" bg="light" variant="light" collapseOnSelect={true}>
                <Navbar.Brand as={Link} to="/">
                    EGeometry
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav"/>
                <Navbar.Collapse id="navbar-nav">

                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Exercise</Nav.Link>
                        <NavDropdown title="Account" id="account-tabs">
                            <NavDropdown.Item as={Link} to={routePaths.SIGN_IN_FULL}>Sign in</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={routePaths.SIGN_UP_FULL}>Sign up</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}