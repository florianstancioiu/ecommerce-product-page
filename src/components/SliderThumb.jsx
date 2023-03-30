import classes from './SliderThumb.module.css';

const SliderThumb = ({ thumbIndex, currentIndex, onClick, item }) => {
  const thumbClasses =
    thumbIndex === currentIndex
      ? `${classes['slider-thumb']} ${classes.active}`
      : classes['slider-thumb'];

  return (
    <div onClick={onClick} className={thumbClasses}>
      <img src={item.thumb} />
    </div>
  );
};

export default SliderThumb;
