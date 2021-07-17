import React from 'react';
import PropTypes from 'prop-types';
import './RandomPhoto.scss';
import { Button } from 'reactstrap';

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onImageUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func,
};

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000 );
    return `https://picsum.photos/id/${randomId}/300/300`;
}

function RandomPhoto(props) {
    const {name,imageUrl,onImageUrlChange,onRandomButtonBlur} = props;

    const handleRandomPhotoClick = () => {
        if(onImageUrlChange){
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)
        }
    }
    return (
        <div className="random-photo">
            <div className="random-photo_button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>
            <div className="random-photo__photo">
                {imageUrl && <img src={imageUrl} alt="Ooops ... not found . please click random again !!" />}
            </div>
        </div>
    );
}

export default RandomPhoto;