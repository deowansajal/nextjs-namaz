import { Container } from 'react-bootstrap'

import SignIn from '../../components/auth/SignIn'
import publicPage from '../../utils/publicPage'

const AuthPage = () => {
    return (
        <Container>
            <SignIn />
        </Container>
    )
}

export default publicPage(AuthPage)
