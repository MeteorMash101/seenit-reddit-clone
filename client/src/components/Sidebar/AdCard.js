// EDIT: file fucks up when class wrapper css WTF?!

import ad from '../imgs/tempAd.jpg';
import classes from './AdCard.module.css';
const AdCard = (props) => {
  return (
      <img className={classes.wrapper} src={ad} alt="Logo"/>
  );
}

export default AdCard;