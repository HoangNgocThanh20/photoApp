import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {Button,FormGroup,Input,Label} from 'reactstrap';
import Images from '../../../../constants/image'
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global'
import { Formik,Form, FastField } from 'formik';
import InputField from '../../../../components/FormControl/InputField';
import SelectField from '../../../../components/FormControl/SelectField';
import RandomPhotoField from '../../../../components/FormControl/RandomPhotoField';
PhotoForm.propTypes = {
    
};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        categoryId: null,
    }
    return (
       <Formik initialValues={initialValues}>
           {formikProps => {
               const {values,errors,touched} = formikProps;
               console.log({values,errors,touched});

               return (
               <Form>
                 <FastField 
                    name="title"
                    component={InputField}

                    label="title"
                    placeholder="Eg: Wow nature ... "
                 />

                  <FastField 
                    name="categoryId"
                    component={SelectField}

                    options={PHOTO_CATEGORY_OPTIONS}
                    label="category"
                    placeholder="what's your photo category?"
                 />
    
                <FastField 
                    name="photo"
                    component={RandomPhotoField}
                    label="photo"
                />
                <FormGroup>
                    <Button color="primary">Add to Album</Button>
                </FormGroup>
            </Form>
            )} }
       </Formik>
    );
}

export default PhotoForm;