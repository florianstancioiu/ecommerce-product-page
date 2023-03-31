import { useContext } from 'react';

import classes from './TextDesc.module.css';
import Price from './Price';
import QuantityInput from './QuantityInput';
import MainBtn from './MainBtn';
import { CartContext } from '../store/CartContext';

const TextDesc = () => {
  const cartContext = useContext(CartContext);
  const { currentQuantity, setCartItems } = cartContext;
  const sneaker = {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description: `These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.`,
  };
  const price = {
    current: '$125.00',
    discount: '50%',
    initial: '$250.00',
  };

  const onClickBtnHandler = () => {
    if (currentQuantity === 0) {
      return false;
    }

    setCartItems([
      {
        sneaker: sneaker,
        price: price,
        quantity: currentQuantity,
      },
    ]);
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes['company-title']}>{sneaker.company}</p>
      <h1 className={classes.title}>{sneaker.title}</h1>
      <p className={classes.description}>{sneaker.description}</p>
      <Price
        current={price.current}
        discount={price.discount}
        initial={price.initial}
      />
      <div className={classes['quantity-btn-wrapper']}>
        <QuantityInput />
        <MainBtn title='Add to cart' withIcon onClick={onClickBtnHandler} />
      </div>
    </div>
  );
};

export default TextDesc;
