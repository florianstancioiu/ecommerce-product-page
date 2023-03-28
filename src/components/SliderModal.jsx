import ReactDOM from 'react-dom';
import { useState } from 'react';

import classes from './SliderModal.module.css';
import ProductOneImg from '../images/image-product-1.jpg';
import ProductOneThumb from '../images/image-product-1-thumbnail.jpg';
import ProductTwoImg from '../images/image-product-2.jpg';
import ProductTwoThumb from '../images/image-product-2-thumbnail.jpg';
import ProductThreeImg from '../images/image-product-3.jpg';
import ProductThreeThumb from '../images/image-product-3-thumbnail.jpg';
import ProductFourImg from '../images/image-product-4.jpg';
import ProductFourThumb from '../images/image-product-4-thumbnail.jpg';
import IconNext from '../images/icon-next.svg';
import IconPrevious from '../images/icon-previous.svg';

const SliderModal = ({ imgIndex }) => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: ProductOneImg,
      thumb: ProductOneThumb,
      active: true,
    },
    {
      id: 2,
      url: ProductTwoImg,
      thumb: ProductTwoThumb,
      active: false,
    },
    {
      id: 3,
      url: ProductThreeImg,
      thumb: ProductThreeThumb,
      active: false,
    },
    {
      id: 4,
      url: ProductFourImg,
      thumb: ProductFourThumb,
      active: false,
    },
  ]);
  const [index, setIndex] = useState(0);

  //
  const goLeft = () => {
    if (index === 0) {
      setIndex(images.length - 1);
    } else {
      setIndex((prev) => --prev);
    }

    updateImages();
  };

  const goRight = () => {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex((prev) => ++prev);
    }

    updateImages();
  };

  const updateImages = () => {
    setImages((prevImages) => {
      return prevImages.map((item, imagesIndex2) => {
        if (imagesIndex2 === index) {
          return {
            ...item,
            active: true,
          };
        }

        return {
          ...item,
          active: false,
        };
      });
    });
  };

  return ReactDOM.createPortal(
    <div className={classes['slider-wrapper']}>
      <div className={classes.slider}>
        <div className={classes['slider-images']}>
          {images.map((item, imagesIndex) => {
            const imgClasses =
              imagesIndex === index
                ? `${classes['slider-image']} ${classes.active}`
                : classes['slider-image'];

            return (
              <img key={imagesIndex} src={item.url} className={imgClasses} />
            );
          })}
        </div>
        <div className={classes['slider-thumbs']}>
          {images.map((item, thumbsIndex) => {
            const imgClasses =
              thumbsIndex === index
                ? `${classes['slider-thumb']} ${classes.active}`
                : classes['slider-thumb'];

            return (
              <img
                onClick={() => {
                  setIndex(thumbsIndex);
                  updateImages();
                }}
                key={thumbsIndex}
                src={item.thumb}
                className={imgClasses}
              />
            );
          })}
        </div>
        <div onClick={goLeft} className={classes['slider-left-btn']}>
          <img src={IconPrevious} alt='' />
        </div>
        <div onClick={goRight} className={classes['slider-right-btn']}>
          <img src={IconNext} alt='' />
        </div>
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default SliderModal;
