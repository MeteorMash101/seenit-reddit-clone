import classes from './TopCommsCard.module.css';
const TopCommsCard = (props) => {
  return (
    <div className={classes.wrapper}>
        <h4 className={classes.h4}>Top Growing Communities</h4>
        <button className={classes.btn}>r/Funny</button>
        <button className={classes.btn}>r/Memes</button>
        <button className={classes.btn}>r/Cute</button>
        <button className={classes.btn}>r/Gaming</button>
        <button className={classes.btn}>r/Videos</button>
        <button className={classes.btn}>r/Movies</button>
    </div>
  );
}

export default TopCommsCard;
