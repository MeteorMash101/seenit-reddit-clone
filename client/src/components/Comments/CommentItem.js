import logo from '../imgs/rl2.png';
import classes from './CommentItem.module.css';
import CommentInfo from './CommentInfo';
const CommentItem = (props) => {
  return (
    <div className={classes.wrapper}>
        <img className={classes.miniLogo} src={logo} alt="Logo"/>
        {/* map its children into new comment item? can this be done recursively? */}
        <CommentInfo/>
    </div>

  );
}

export default CommentItem;
