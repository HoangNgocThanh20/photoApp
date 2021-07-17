import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import { addphoto } from '../../PhotoSlice';
import './AddEdit.scss'

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (values) => {
    return new Promise(resolve => {
      setTimeout(() => {
        const action = addphoto(values)
        dispatch(action);
        history.push('/photo');
      }, 2000);
    })
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit__form">
        <PhotoForm onSubmit={handleSubmit}/>
      </div>
    </div>
  );
}

export default AddEditPage;