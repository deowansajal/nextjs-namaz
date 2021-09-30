import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'

const InputGroup = ({
    type = 'text',
    name,
    label,
    value,
    onChange,
    ...rest
}) => {
    return (
        <FormGroup className="mb-3" controlId={name}>
            <FormLabel>{label}</FormLabel>
            <FormControl
                {...rest}
                type={type}
                value={value}
                onChange={onChange}
            />
        </FormGroup>
    )
}

export default InputGroup
