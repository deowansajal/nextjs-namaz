import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase, { uiConfig } from '/firebase/initFirebase'

import FormWrapper from '../forms/FormWrapper'

const SignIn = () => {
    return (
        <FormWrapper>
            <h1 className="mt-5 mb-4 text-center text-uppercase ">Login</h1>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </FormWrapper>
    )
}

export default SignIn
