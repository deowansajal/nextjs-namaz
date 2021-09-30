import useAuth from '../hooks/useAuth'

const HomePage = () => {
    const { user, loading, error } = useAuth()

    console.log(user)
    return (
        <div>
            <h1 className="display-4 text-center">Hello {user?.displayName}</h1>
        </div>
    )
}

export default HomePage
