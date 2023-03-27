import { useState } from 'react';

import classes from './Header.module.css';
import IconMenu from '../images/icon-menu.svg';
import IconCart from '../images/icon-cart.svg';
import Logo from '../images/logo.svg';
import AvatarImage from '../images/image-avatar.png';
import HeaderMobileMenu from './HeaderMobileMenu';

const Header = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className={classes.header}>
      <div className={classes['mobile-menu']}>
        <HeaderMobileMenu
          show={isShown}
          onClose={() => {
            setIsShown(false);
          }}
        />
      </div>
      <div className={classes['left-side']}>
        <img
          onClick={() => setIsShown(true)}
          className={classes['menu-icon']}
          src={IconMenu}
          alt=''
        />
        <img className={classes.logo} src={Logo} alt='Sneakers' />
      </div>
      <div className={classes['right-side']}>
        <img className={classes['cart-icon']} src={IconCart} alt='' />
        <img className={classes['avatar']} src={AvatarImage} alt='' />
      </div>
    </div>
  );
};

export default Header;
