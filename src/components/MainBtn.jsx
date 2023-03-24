import classes from './MainBtn.module.css';
import CartIcon from '../images/icon-cart-white.svg';

const MainBtn = ({ title, withIcon }) => {
  return (
    <button type='button' className={classes.wrapper}>
      {withIcon && (
        <img src={CartIcon} className={classes['cart-icon']} alt='' />
      )}
      <span>{title}</span>
    </button>
  );
};

export default MainBtn;
