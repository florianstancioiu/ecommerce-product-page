import ReactDOM from 'react-dom';

import classes from './CartModal.module.css';
import MainBtn from './MainBtn';
import ImageThumbnail from '../images/image-product-1-thumbnail.jpg';
import TrashIcon from '../images/icon-delete.svg';

const CartModal = ({ show }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={classes.cart}>
      <div className={classes.header}>
        <p className={classes['cart-title']}>Cart</p>
      </div>
      <div className={classes.content}>
        <div className={classes.item}>
          <div className={classes['item-img']}>
            <img src={ImageThumbnail} alt='Product Image' />
          </div>
          <div className={classes['item-desc']}>
            <p className={classes['item-title']}>
              Fall Limited Edition Sneakers
            </p>
            <p className={classes['item-price-wrapper']}>
              <span className={classes['item-price']}>$125.00 x </span>
              <span className={classes['item-count']}>3 </span>
              <span className={classes['item-total']}>$375.00</span>
            </p>
          </div>
          <div className={classes['item-trash']}>
            <img src={TrashIcon} alt='' />
          </div>
        </div>
        <MainBtn title='Checkout' />
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default CartModal;
