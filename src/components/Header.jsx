import { useState } from 'react';

import classes from './Header.module.css';
import IconMenu from '../images/icon-menu.svg';
import IconCart from '../images/icon-cart.svg';
import Logo from '../images/logo.svg';
import AvatarImage from '../images/image-avatar.png';
import HeaderMobileMenu from './HeaderMobileMenu';
import CartModal from './CartModal';

const Header = () => {
  const [mobileMenuShown, setMobileMenuShown] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes['mobile-menu']}>
        <HeaderMobileMenu
          show={mobileMenuShown}
          onClose={() => {
            setMobileMenuShown(false);
          }}
        />
        <CartModal show={showCart} />
      </div>
      <div className={classes['left-side']}>
        <img
          onClick={() => setMobileMenuShown(true)}
          className={classes['menu-icon']}
          src={IconMenu}
          alt=''
        />
        <img className={classes.logo} src={Logo} alt='Sneakers' />
      </div>
      <div className={classes['right-side']}>
        <div className={classes['cart-icon-wrapper']}>
          <img
            onClick={() => setShowCart((prev) => !prev)}
            className={classes['cart-icon']}
            src={IconCart}
            alt=''
          />
          <span className={classes['cart-count']}>3</span>
        </div>
        <img className={classes['avatar']} src={AvatarImage} alt='' />
      </div>
    </div>
  );
};

export default Header;
