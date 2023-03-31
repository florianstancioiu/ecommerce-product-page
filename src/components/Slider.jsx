import { useState } from 'react';

import classes from './Slider.module.css';
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
import SliderThumb from './SliderThumb';
import SliderModal from './SliderModal';

const Slider = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: ProductOneImg,
      thumb: ProductOneThumb,
      altText: 'Ecommerce Product 1 Showcase Image',
      active: true,
    },
    {
      id: 2,
      url: ProductTwoImg,
      thumb: ProductTwoThumb,
      altText: 'Ecommerce Product 1 Showcase Image',
      active: false,
    },
    {
      id: 3,
      url: ProductThreeImg,
      thumb: ProductThreeThumb,
      altText: 'Ecommerce Product 1 Showcase Image',
      active: false,
    },
    {
      id: 4,
      url: ProductFourImg,
      thumb: ProductFourThumb,
      altText: 'Ecommerce Product 1 Showcase Image',
      active: false,
    },
  ]);
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <>
      <div className={classes.slider}>
        <div className={classes['slider-images']}>
          {images.map((item, imagesIndex) => {
            const imgClasses =
              imagesIndex === index
                ? `${classes['slider-image']} ${classes.active}`
                : classes['slider-image'];

            return (
              <img
                onClick={() => {
                  setShowModal(true);
                }}
                alt={item.altText}
                key={imagesIndex}
                src={item.url}
                className={imgClasses}
              />
            );
          })}
        </div>
        <div className={classes['slider-thumbs']}>
          {images.map((item, thumbsIndex) => {
            return (
              <SliderThumb
                key={thumbsIndex}
                thumbIndex={thumbsIndex}
                currentIndex={index}
                item={item}
                onClick={() => {
                  setIndex(thumbsIndex);
                  updateImages();
                }}
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
      <SliderModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Slider;
