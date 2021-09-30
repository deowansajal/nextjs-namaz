import { useRouter } from 'next/router'

import Loading from '../components/ui/Loading'
import useAuth from '../hooks/useAuth'

const publicPage = Component => {
    return props => {
        const router = useRouter()
        const { user, loading, error } = useAuth()

        if (loading) {
            return <Loading />
        }

        if (user) {
            router.replace('/')
            return <Loading />
        }

        return <Component {...props} />
    }
}

export default publicPage
