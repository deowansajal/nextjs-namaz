import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from '../firebase/initFirebase'

import Loading from '../components/ui/Loading'
import useAuth from '../hooks/useAuth'

const privatePage = Component => {
    return props => {
        const router = useRouter()
        const { user, loading, error } = useAuth()

        if (loading) {
            return <Loading />
        }

        if (!user) {
            router.replace('/auth')
            return <Loading />
        }

        return <Component {...props} />
    }
}

export default privatePage
