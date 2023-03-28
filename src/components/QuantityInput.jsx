import classes from './QuantityInput.module.css';
import IconPlus from '../images/icon-plus.svg';
import IconMinus from '../images/icon-minus.svg';
import { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseValue = () => {
    setQuantity((prev) => {
      let prevValue = parseInt(prev);
      return ++prevValue;
    });
  };

  const decreaseValue = () => {
    if (quantity !== 0) {
      setQuantity((prev) => {
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
      <p className={classes.quantity}>{quantity}</p>
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
