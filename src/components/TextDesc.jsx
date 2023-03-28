import classes from './TextDesc.module.css';
import Price from './Price';
import QuantityInput from './QuantityInput';
import MainBtn from './MainBtn';

const TextDesc = () => {
  return (
    <div className={classes.wrapper}>
      <p className={classes['company-title']}>Sneaker Company</p>
      <h1 className={classes.title}>Fall Limited Edition Sneakers</h1>
      <p className={classes.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <Price current='$125.00' discount='50%' initial='$250.00' />
      <div className={classes['quantity-btn-wrapper']}>
        <QuantityInput />
        <MainBtn title='Add to cart' withIcon />
      </div>
    </div>
  );
};

export default TextDesc;
