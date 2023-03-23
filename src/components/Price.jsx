import classes from './Price.module.css';

const Price = ({ initial, discount, current }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <p className={classes.current}>{current}</p>
        <p className={classes.discount}>{discount}</p>
      </div>
      <p className={classes.initial}>{initial}</p>
    </div>
  );
};

export default Price;
