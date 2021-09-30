import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import ActiveLink from './ActiveLink'
import firebase from '../../firebase/initFirebase'
import useAuth from '../../hooks/useAuth'

import classes from './MainNavigation.module.css'

const MainNavigation = () => {
    const { user, loading, error } = useAuth()

    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link href="/">
                        <a className={classes.logo}>Kaza Namaz</a>
                    </Link>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    {!user && (
                        <ActiveLink
                            href="/auth"
                            activeClassName={classes.active}
                        >
                            <a className={classes.link}>Sign In</a>
                        </ActiveLink>
                    )}

                    {user && (
                        <ActiveLink
                            href="/profile"
                            activeClassName={classes.active}
                        >
                            <a className={classes.link}>Profile</a>
                        </ActiveLink>
                    )}

                    {user && (
                        <Link href="/auth">
                            <a
                                onClick={() => firebase.auth().signOut()}
                                className={classes.link}
                            >
                                Logout
                            </a>
                        </Link>
                    )}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation
