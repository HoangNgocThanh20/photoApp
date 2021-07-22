import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

SelectField.propTypes = {
    
};
const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 400,
      minHeight: 50
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    wrapper: {
        marginTop: theme.spacing(1)
    }
  }));

function SelectField({label='',form={},name='',isAddMode,photo}) {
    const classes = useStyles();
    const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const { control } = form;
    return (
        <div className={classes.wrapper}>
            <label style={{fontSize: '18px'}}>{label}</label>
            <Controller 
                name={name}
                control={control}

                render={({ field,field:{value} }) => <FormControl className={classes.formControl} >
                <Select name={name} 
                        label={label}
                        {...field}
                        value={isAddMode?value:photo.categoryId}
                        fullWidth
                        >
                    <MenuItem value={1}>Technology</MenuItem>
                    <MenuItem value={2}>Education</MenuItem>
                    <MenuItem value={3}>Nature</MenuItem>
                    <MenuItem value={4}>Animals</MenuItem>
                    <MenuItem value={5}>Styles</MenuItem>
                </Select>
          </FormControl>}
          />
        
        </div>
    );
}

export default SelectField;