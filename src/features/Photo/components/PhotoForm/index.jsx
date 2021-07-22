import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as yup from 'yup';
import InputField from '../../../../components/FormControl/InputField';
import RandomPhotoField from '../../../../components/FormControl/RandomPhotoField';
import SelectField from '../../../../components/FormControl/SelectField';

const useStyles = makeStyles((theme) => ({
    button: {
      marginTop: '1rem'
    },
  }));
function PhotoForm(props) {
    const { initialValues,isAddMode,onSubmit } = props
    const classes = useStyles();
    const [url,setUrl] = useState('');
    //validate form
        const schema = yup.object().shape({
            title: yup.string().required('vui lòng nhập trường này')
            .min(6,'vui lòng nhập ít nhất 6 ký tự')
        });
        const {photoId} = useParams();

        const photo = useSelector(state => state.photos.find(photo => photo.id === + photoId))
        console.log(photo);

        const form = useForm({
            defaultValues: {
                ...initialValues
            },
            resolver: yupResolver(schema)
        });
        const onGetUrlImage = (url) => {
            setUrl(url)
        }

        const SubmitDataForm = (values) => {onSubmit({...values,photo: url})}
    return (
        //form hook
       <form onSubmit={form.handleSubmit(SubmitDataForm)}>
           <InputField form={form} name="title" label='title' type='text' />
           <SelectField form={form} name= 'selectValue' label='category' isAddMode={isAddMode} photo={photo}/>
           <RandomPhotoField initialValues={initialValues} form={form}
            label='photo' name='photo' onSubmit={onGetUrlImage} isAddMode={isAddMode} photo={photo}
            />
           <Button variant="contained" color={isAddMode ? 'primary' : 'secondary'} type="submit" className={classes.button}>
                {isAddMode ? 'Add to album' : 'Update your photo'}
           </Button>
       </form>
    );
}

export default PhotoForm;