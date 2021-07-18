import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import { addphoto, updatePhoto } from '../../PhotoSlice';
import './AddEdit.scss'

AddEditPage.propTypes = {};

function AddEditPage(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {photoId} = useParams(); // lấy các biến trên url
  console.log({photoId});
  const isAddMode = !photoId; // ktra xem là add hay edit
  const edditPhoto = useSelector(state => state.photos.find(x => x.id === +photoId))
  const initialValues = isAddMode
    ? {
      title: '',
      category: 0,
      photo: ''
    }
    : edditPhoto

  const handleSubmit = (values) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if(isAddMode) {
          const action = addphoto(values)
          dispatch(action);
        }
        else {
          const action = updatePhoto(values);
          dispatch(action);
        }
        history.push('/photo');
        resolve()
      }, 1000);
    })
  }
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo" />
      <div className="photo-edit__form">
        <PhotoForm 
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default AddEditPage;