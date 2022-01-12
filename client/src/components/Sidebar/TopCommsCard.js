import { useNavigate } from 'react-router-dom'
import classes from './TopCommsCard.module.css';
const TopCommsCard = (props) => {
  const navigate = useNavigate()
  return (
    <div className={classes.wrapper}>
        <h4 className={classes.h4}>Top Growing Communities</h4>
        <button onClick={() => navigate('/r/funny')} className={classes.btn}>r/Funny</button>
        <button onClick={() => navigate('/r/memes')} className={classes.btn}>r/Memes</button>
        <button onClick={() => navigate('/r/cute')} className={classes.btn}>r/Cute</button>
        <button className={classes.btn}>r/Gaming</button>
        <button className={classes.btn}>r/Videos</button>
        <button className={classes.btn}>r/Movies</button>
    </div>
  );
}

export default TopCommsCard;
