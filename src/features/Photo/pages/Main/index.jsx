import React from 'react';
import Banner from '../../../../components/Banner';
import Image from '../../../../constants/image'

MainPage.propTypes = {};

function MainPage(props) {
  return (
    <div className="photo-main">
        <Banner title="Your awesome photos " backgroundUrl={Image.PINK_BG}/>
    </div>
  );
}

export default MainPage;