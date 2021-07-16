import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool, 
};

function InputField({type = 'text',label = '',placeholder = '',disabled = false,field,form}) {
    const {name} = field;
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            
            <Input 
                type = {type}
                disabled={disabled}
                id = {name} 
                {...field}
                placeholder="Eg: Wow nature ... " 
            />
        </FormGroup>
    );
}

export default InputField;