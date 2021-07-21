import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'reactstrap';
import './RandomPhoto.scss';

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
    const {name,imageUrl,onImageUrlChange,onRandomButtonBlur,initialValues} = props;

    const handleRandomPhotoClick = () => {
        if(onImageUrlChange){ 
            const randomImageUrl = getRandomImageUrl();
            onImageUrlChange(randomImageUrl)  // hàm đưa dữ liệu về component cha
        }
    }
    
    return (
        <div className="random-photo">
            <div className="random-photo__button">
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
                {imageUrl && <img src={imageUrl} 
                    alt="Ooops ... not found . please click random again !!" 
                    onError={e => e.target.src = handleRandomPhotoClick()}
                />}
            </div>
        </div>
    );
}

export default RandomPhoto;