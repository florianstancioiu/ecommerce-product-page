import ReactDOM from 'react-dom';

import classes from './HeaderMobileMenu.module.css';
import IconClose from '../images/icon-close.svg';

const HeaderMobileMenu = ({ show, onClose }) => {
  if (!show) return null;

  return ReactDOM.createPortal(
    <div className={classes.wrapper}>
      <div className={classes.overlay} onClick={() => onClose()}></div>
      <div className={classes.content}>
        <img
          src={IconClose}
          className={classes['close-icon']}
          onClick={() => onClose()}
          alt=''
        />
        <a href='#' className={classes.link}>
          Collections
        </a>
        <a href='#' className={classes.link}>
          Men
        </a>
        <a href='#' className={classes.link}>
          Women
        </a>
        <a href='#' className={classes.link}>
          About
        </a>
        <a href='#' className={classes.link}>
          Contact
        </a>
      </div>
    </div>,
    document.querySelector('#overlays-root')
  );
};

export default HeaderMobileMenu;
