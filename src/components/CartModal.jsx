import ReactDOM from 'react-dom';
import { useContext } from 'react';

import classes from './CartModal.module.css';
import MainBtn from './MainBtn';
import ImageThumbnail from '../images/image-product-1-thumbnail.jpg';
import TrashIcon from '../images/icon-delete.svg';
import { CartContext } from '../store/CartContext';

const CartModal = ({ show }) => {
  const cartContext = useContext(CartContext);
  const { cartItems, setCartItems } = cartContext;
  const firstCartItem = cartItems[0] !== undefined ? cartItems[0] : {};
  const totalPrice = () => {
    if (cartItems.length === 0) return 0;

    const quantity = cartItems[0].quantity;

    return (
      parseInt(firstCartItem.price.current.substring(1)) * quantity
    ).toFixed(2);
  };

  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={classes['cart-wrapper']}>
      <div className={classes.cart}>
        <div className={classes.header}>
          <p className={classes['cart-title']}>Cart</p>
        </div>
        <div className={classes.content}>
          {cartItems.length > 0 && (
            <>
              <div className={classes.item}>
                <div className={classes['item-img']}>
                  <img src={ImageThumbnail} alt='Product Image' />
                </div>
                <div className={classes['item-desc']}>
                  <p className={classes['item-title']}>
                    {firstCartItem.sneaker.title}
                  </p>
                  <p className={classes['item-price-wrapper']}>
                    <span className={classes['item-price']}>
                      {firstCartItem.price.current} x{' '}
                    </span>
                    <span className={classes['item-count']}>
                      {firstCartItem.quantity}{' '}
                    </span>
                    <span className={classes['item-total']}>
                      ${totalPrice()}
                    </span>
                  </p>
                </div>
                <div
                  onClick={() => setCartItems([])}
                  className={classes['item-trash']}
                >
                  <img src={TrashIcon} alt='' />
                </div>
              </div>
              <MainBtn title='Checkout' />
            </>
          )}
          {cartItems.length === 0 && (
            <p className={classes['empty-cart']}>Your cart is empty</p>
          )}
        </div>
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default CartModal;
