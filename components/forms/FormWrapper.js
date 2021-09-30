import classes from './FormWrapper.module.css'

const FormWrapper = ({ children }) => {
    return <div className={classes.wrapper}>{children}</div>
}

export default FormWrapper
