import { useContext } from 'react';

import classes from './QuantityInput.module.css';
import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';
import { CartContext } from '../store/CartContext';

const QuantityInput = () => {
  const cartContext = useContext(CartContext);
  const { currentQuantity, setCurrentQuantity } = cartContext;

  const increaseValue = () => {
    setCurrentQuantity((prev) => {
      let prevValue = parseInt(prev);
      return ++prevValue;
    });
  };

  const decreaseValue = () => {
    if (currentQuantity !== 0) {
      setCurrentQuantity((prev) => {
        let prevValue = parseInt(prev);
        return --prevValue;
      });
    }
  };

  return (
    <div className={classes.wrapper}>
      <img
        onClick={decreaseValue}
        src={IconMinus}
        className={classes['icon-minus']}
        alt=''
      />
      <p className={classes.quantity}>{currentQuantity}</p>
      <img
        onClick={increaseValue}
        src={IconPlus}
        className={classes['icon-plus']}
        alt=''
      />
    </div>
  );
};

export default QuantityInput;
