import { useRouter } from 'next/router'

import { useAuthState } from 'react-firebase-hooks/auth'

import firebase from '../../firebase/initFirebase'
import SignIn from '../../components/auth/SignIn'

const Auth = () => {
    const router = useRouter()
    const [user, loading, error] = useAuthState(firebase.auth())

    if (loading) {
        return <div>Loading...</div>
    }

    if (user) {
        router.replace('/')
        return null
    }

    return (
        <>
            <SignIn />
        </>
    )
}

export default Auth
