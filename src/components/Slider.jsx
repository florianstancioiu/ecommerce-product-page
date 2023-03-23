import classes from './Slider.module.css';
import ProductOneImg from '../images/image-product-1.jpg';
import ProductTwoImg from '../images/image-product-2.jpg';
import ProductThreeImg from '../images/image-product-3.jpg';
import ProductFourImg from '../images/image-product-4.jpg';
import IconNext from '../images/icon-next.svg';
import IconPrevious from '../images/icon-previous.svg';

const images = [
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
];

const Slider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes['slider-images']}>
        {images.map((item, index) => {
          const imgClasses = item.active
            ? `${classes['slider-image']} ${classes.active}`
            : classes['slider-image'];

          return <img key={index} src={item.url} className={imgClasses} />;
        })}
      </div>
      <div className={classes['slider-left-btn']}>
        <img src={IconPrevious} alt='' />
      </div>
      <div className={classes['slider-right-btn']}>
        <img src={IconNext} alt='' />
      </div>
    </div>
  );
};

export default Slider;
