import RandomPhoto from '../../RandomPhoto'
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';

RandomPhotoField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  onSubmit: PropTypes.func,
};


function RandomPhotoField(props) {
  const [imageValue,setImageValue] = useState('');
  const {name,form,onSubmit} = props;
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