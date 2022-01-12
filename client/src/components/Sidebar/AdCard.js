// EDIT: file fucks up when class wrapper css WTF?!
import classes from './AdCard.module.css';
const AdCard = (props) => {
  return (
      <img className={classes.wrapper} src={props.adPic} alt="Logo"/>
  );
}

export default AdCard;