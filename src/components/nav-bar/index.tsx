import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { logout } from '../../state/application/actions';
import { getIsLoggedIn } from '../../state/application/selectors';
import { useDispatch, useSelector } from '../../state/store';

export const NavBar: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isLoggedIn = useSelector(getIsLoggedIn);

    const logoutHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();

        dispatch(logout());
        history.push('/login');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/home">Photography Journey</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {isLoggedIn ? (
                        <Nav.Item onClick={logoutHandler}>Log Out</Nav.Item>
                    ) : (
                        <>
                            <Nav.Item>
                                <Nav.Link href="/sign-up">Sign Up</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
