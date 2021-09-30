import Button from 'react-bootstrap/Button'

const SubmitButton = ({ children, ...rest }) => {
    return (
        <Button
            {...rest}
            variant="danger"
            className="w-100 mt-3 text-uppercase"
            type="submit"
        >
            {children}
        </Button>
    )
}

export default SubmitButton
