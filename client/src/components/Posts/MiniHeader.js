import logo from '../imgs/rl2.png';
import classes from './MiniHeader.module.css';

const MiniHeader = (props) => {
  let subredditColor;
  switch(props.subreddit) {
    case "funny":
      subredditColor = classes.green;
      break;
    case "memes":
      subredditColor = classes.orange;
      break;
    case "cute":
      subredditColor = classes.pink;
      break;
    default:
      // change nothing (is there better way?)
      subredditColor = '';
  }
  return (
    <div className={classes.wrapper}>
        <img className={classes.subLogo} id={subredditColor} src={logo} alt="temp"/>
        <p className={classes.miniHdrTxt}>r/Funny | Posted by  [username] | [time] ago</p>
    </div>
  );
}

export default MiniHeader;
