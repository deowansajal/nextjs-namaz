import { useState, useRef, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'
import firebase from '../../firebase/initFirebase'
import FormWrapper from '../forms/FormWrapper'
import InputGroup from '../forms/InputGroup'
import SubmitButton from '../forms/SubmitButton'

const createCredential = (email, password) => {
    return firebase.auth.EmailAuthProvider.credential(email, password)
}

const updateUserProfile = async (user, updatedProfileData) => {
    return await user.updateProfile(updatedProfileData)
}

const updateUserPassword = async ({
    user,
    oldPassword,
    newPassword,
    isPasswordProvider,
}) => {
    if (oldPassword && newPassword && isPasswordProvider) {
        const credential = createCredential(user.email, oldPassword)
        await user.reauthenticateWithCredential(credential)
        await user.updatePassword(newPassword)
    }
}

const ToastMessage = message => ({})

const ProfileUpdateForm = ({ user }) => {
    let _displayUser = user?.displayName || ''
    const [newDisplayName, setNewDisplayName] = useState(_displayUser)
    const [newPassword, setNewPassword] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const isPasswordProvider = useRef(
        user?.providerData[0]?.providerId === 'password'
    ).current

    const onSubmit = async e => {
        e.preventDefault()
        setIsLoading(true)
        const updatedUserProfilePromise = updateUserProfile(user, {
            displayName: newDisplayName,
        })

        const updatedUserPasswordPromise = updateUserPassword({
            user,
            oldPassword,
            newPassword,
            isPasswordProvider,
        })

        try {
            await Promise.all([
                updatedUserProfilePromise,
                updatedUserPasswordPromise,
            ])
            setSuccessMessage('User Profile updated successfully')

            setIsLoading(false)
        } catch (err) {
            setErrorMessage(err.message)
            setIsLoading(false)
        }
    }

    const onNameChangeHandler = e => {
        setErrorMessage('')
        setSuccessMessage('')
        setNewDisplayName(e.target.value)
    }
    const onPasswordChangeHandler = e => {
        setErrorMessage('')
        setSuccessMessage('')
        setNewPassword(e.target.value)
    }
    const onOldPasswordChangeHandler = e => {
        setErrorMessage('')
        setSuccessMessage('')
        setOldPassword(e.target.value)
    }

    useEffect(() => {
        return () => {
            setErrorMessage('')
            setSuccessMessage('')
            toast.dismiss()
        }
    }, [])
    return (
        <FormWrapper>
            <h1 className="my-5 text-center text-uppercase">Your Profile</h1>
            {errorMessage &&
                toast.error(errorMessage, {
                    toastId: 'errorMessage',
                })}
            {console.log(successMessage)}

            {successMessage &&
                toast.success(successMessage, {
                    toastId: 'successMessage',
                })}
            <form onSubmit={onSubmit}>
                <InputGroup
                    label="Name:"
                    name="name"
                    value={newDisplayName}
                    onChange={onNameChangeHandler}
                />
                <InputGroup
                    required
                    disabled
                    label="Email:"
                    name="email"
                    value={user?.email}
                />

                {isPasswordProvider && (
                    <InputGroup
                        type="password"
                        label="Old Password:"
                        name="OldPassword"
                        value={oldPassword}
                        onChange={onOldPasswordChangeHandler}
                    />
                )}

                {isPasswordProvider && (
                    <InputGroup
                        type="password"
                        label="New Password:"
                        name="newPassword"
                        value={newPassword}
                        onChange={onPasswordChangeHandler}
                    />
                )}

                <SubmitButton disabled={isLoading}>Update Profile</SubmitButton>
            </form>
        </FormWrapper>
    )
}

export default ProfileUpdateForm
