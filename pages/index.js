import Button from 'react-bootstrap/Button'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '../firebase/initFirebase'

const HomePage = () => {
    const [user, loading, error] = useAuthState(firebase.auth())

    return (
        <div>
            <h1 className="display-4 text-center">Hello {user?.email}</h1>

            <Button onClick={() => firebase.auth().signOut()}>Logout</Button>
        </div>
    )
}

export default HomePage
