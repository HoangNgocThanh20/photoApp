import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,   
};

function SelectField({label = '', placeholder = '', disabled = false, options = [],field,form}) {
    const {name,value} = field;
    const selectedOption = options.find(option => option.value === value) // value = field.value

    const handleSelectedOptionChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }
    
    return (
        <FormGroup>
                <Label for="categoryId">Category</Label>
                <Select
                    id={name}
                    name={name}
                    {...field}
                    value={selectedOption}
                    onChange={handleSelectedOptionChange}
                    
                    disabled={disabled}
                    placeholder={placeholder}
                    options={options}
                />
        </FormGroup>
    );
}

export default SelectField;