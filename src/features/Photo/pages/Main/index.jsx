import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Banner from '../../../../components/Banner';
import Image from '../../../../constants/image'

const useStyles = makeStyles((theme) => ({
  link: {
    textAlign: 'center'
  }
}));
MainPage.propTypes = {};

function MainPage(props) {
  const photos = useSelector(state => state.photos)
  console.log(photos);
  const classes = useStyles();
  return (
    <div className="photo-main">
        <Banner title="Your awesome photos " backgroundUrl={Image.PINK_BG}/>

        <Container className={classes.link}>
          <Link to="/photo/add">Add new photo</Link>
        </Container>
    </div>
  );
}

export default MainPage;