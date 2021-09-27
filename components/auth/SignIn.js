import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { uiConfig } from '/firebase/initFirebase'

import { Container } from 'react-bootstrap'

const SignIn = () => {
    return (
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
        />
    )
}

export default SignIn
