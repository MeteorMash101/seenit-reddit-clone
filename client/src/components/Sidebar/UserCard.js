import { Fragment } from "react";
import classes from './UserCard.module.css';
import redditCharacter from '../imgs/redditChar.jpg';

const UserCard = (props) => {
  return (
      <div className={classes.wrapper}> 
        <img className={classes.rChar} src={redditCharacter}/>
        <div className={classes.userInfo}>
            <h3>MeteorMash101</h3>
            <p>u/MeteorMash101 <span>- 10y</span></p>
        </div>
        <div className={classes.userStats}>
          <div><h5>Karma:</h5><p>38,627</p></div> 
          <div><h5>Cake day:</h5><p>December 9, 2011</p></div>
          <div><h5>Followers:</h5><p>5</p></div>
        </div>
      </div>
  );
}

export default UserCard;