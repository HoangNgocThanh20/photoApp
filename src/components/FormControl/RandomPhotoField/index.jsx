import RandomPhoto from '../../RandomPhoto'
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
  initialValues: PropTypes.string,
};


function RandomPhotoField(props) {
  const [imageValue,setImageValue] = useState('https://picsum.photos/id/649/300/300');
  const {name,form,onSubmit,initialValues} = props;
  const handleImageUrlChange = (newImageUrl) => {
    setImageValue(newImageUrl);
  }
  onSubmit(imageValue)

  return (
    <div>
      <Controller 
        name={name}
        control={form.control}

        render ={({ field:{onBlur}  }) => <RandomPhoto
                                      initialValues={initialValues}
                                      name={name}
                                      form={form}
                                      imageUrl={imageValue}
                                      onImageUrlChange={handleImageUrlChange}
                                      onRandomButtonBlur={onBlur}
                                  />}
      />
        
    </div>
  );
}

export default RandomPhotoField;