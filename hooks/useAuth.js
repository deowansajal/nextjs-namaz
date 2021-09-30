import firebase from '../firebase/initFirebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const useAuth = () => {
    const [user, loading, error] = useAuthState(firebase.auth())

    return {
        user,
        loading,
        error,
    }
}

export default useAuth
