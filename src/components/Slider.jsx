import { useState } from 'react';

import classes from './Slider.module.css';
import ProductOneImg from '../images/image-product-1.jpg';
import ProductTwoImg from '../images/image-product-2.jpg';
import ProductThreeImg from '../images/image-product-3.jpg';
import ProductFourImg from '../images/image-product-4.jpg';
import IconNext from '../images/icon-next.svg';
import IconPrevious from '../images/icon-previous.svg';

const Slider = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      url: ProductOneImg,
      active: true,
    },
    {
      id: 2,
      url: ProductTwoImg,
      active: false,
    },
    {
      id: 3,
      url: ProductThreeImg,
      active: false,
    },
    {
      id: 4,
      url: ProductFourImg,
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

  return (
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
              src={item.url}
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
  );
};

export default Slider;
