import React from 'react';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';


function InputField({form = {}, name = '',label = '',type = ''}) {
    const { control , formState:{ errors } } = form;
    const showError = errors[name]
    return (
        <div>
            <label style={{fontSize: '18px'}}>{label}</label>
            <Controller
            name={name}
            control={control}

            render={({ field }) => <TextField
                placeholder="Eg: wow nature !!"
                {...field}
                type={type}
                error={!!showError}
                helperText={showError?.message}
                variant="outlined"
                fullWidth
            />}
        />
      </div>
    );
}

export default InputField;