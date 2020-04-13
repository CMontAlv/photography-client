import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { api } from '../../api/auth';

import * as routes from '../../constants/routes';

import { logout } from '../../state/application/actions';
import { getIsLoggedIn } from '../../state/application/selectors';
import { useDispatch, useSelector } from '../../state/store';

import './styles.css';

export const NavBar: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isLoggedIn = useSelector(getIsLoggedIn);

    const logoutHandler = React.useCallback(
        async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
            e.preventDefault();

            const [, error] = await api.logout();

            if (!error) {
                dispatch(logout());
                history.push(routes.login);
            }
        },
        [dispatch, history]
    );

    return (
        <Navbar className="navigation-bar" bg="light" expand="lg">
            <Navbar.Brand href={routes.home}>Photo Journal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {isLoggedIn ? (
                        <>
                            <Nav.Item>
                                <Nav.Link href={routes.newEntry}>Create Entry</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="logout">
                                <a className="nav-link" onClick={logoutHandler} href="/">
                                    Log Out
                                </a>
                            </Nav.Item>
                        </>
                    ) : (
                        <>
                            <Nav.Item>
                                <Nav.Link href={routes.signUp}>Sign Up</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href={routes.login}>Login</Nav.Link>
                            </Nav.Item>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
