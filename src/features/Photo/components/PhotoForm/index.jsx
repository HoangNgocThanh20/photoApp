import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import InputField from '../../../../components/FormControl/InputField';
import RandomPhotoField from '../../../../components/FormControl/RandomPhotoField';
import SelectField from '../../../../components/FormControl/SelectField';   
import Spinner from 'reactstrap/lib/Spinner';

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: '20px'
    },
  }));
function PhotoForm(props) {
    const classes = useStyles();
    const [url,setUrl] = useState('');
    //validate form
        const schema = yup.object().shape({
            title: yup.string().required('vui lòng nhập trường này')
            .min(6,'vui lòng nhập ít nhất 6 ký tự')
        });

        const form = useForm({
            defaultValues: {
                title: '',
            },
            resolver: yupResolver(schema)
        });
        const onGetUrlImage = (url) => {
            setUrl(url)
        }

        const onSubmit = (values) => {props.onSubmit({...values,photo: url})}
    return (
        //form hook
       <form onSubmit={form.handleSubmit(onSubmit)}>
           <InputField form={form} name="title" label='title' type='text' />
           <SelectField form={form} name= 'selectValue' label='category'/>
           <RandomPhotoField form={form} label='photo' name='photo' onSubmit={onGetUrlImage}/>
           <Button variant="contained" color="primary" type="submit" className={classes.button}>
                Add to album
           </Button>
       </form>
    );
}

export default PhotoForm;