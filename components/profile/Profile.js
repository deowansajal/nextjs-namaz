import Container from 'react-bootstrap/Container'
import useAuth from '../../hooks/useAuth'
import ProfileUpdateForm from './ProfileUpdateForm'
import firebase from '../../firebase/initFirebase'
import { useState } from 'react'

const Profile = () => {
    const { user, loading, error } = useAuth()

    return (
        <Container>
            <ProfileUpdateForm user={user} />
        </Container>
    )
}

export default Profile
