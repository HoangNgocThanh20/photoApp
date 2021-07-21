import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import Image from '../../../../constants/image'
import PhotoList from '../../components/PhotoList';
import { removePhoto } from '../../PhotoSlice';

const useStyles = makeStyles((theme) => ({
  link: {
    textAlign: 'center'
  }
}));
MainPage.propTypes = {};

function MainPage(props) {
  const classes = useStyles();
  const photos = useSelector(state => state.photos)
  const dispatch = useDispatch();
  const history = useHistory(); 

  const handlePhotoEditClick = (photo) => {
    console.log('Edit: ', photo);
    const editPhotoUrl = `/photo/${photo.id}`
    history.push(editPhotoUrl);  // chuyển đến địa chỉ editPhotoUrl
  }

  const handlePhotoRemoveClick = (photo) => {
    const action = removePhoto(photo.id);
    dispatch(action)
  }

  return (
    <div className="photo-main">
        <Banner title="Your awesome photos " backgroundUrl={Image.PINK_BG}/>

        <Container className={classes.link}>
          <Link to="/photo/add">Add new photo</Link>

          <PhotoList 
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
          />
        </Container>
    </div>
  );
}

export default MainPage;