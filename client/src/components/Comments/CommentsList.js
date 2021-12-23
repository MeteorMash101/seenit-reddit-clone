import classes from './CommentsList.module.css';
import CommentItem from './CommentItem';


const CommentsList = (props) => {
  return (
    <div className={classes.wrapper}>
        <CommentItem/>
    </div>
  );
}

export default CommentsList;
