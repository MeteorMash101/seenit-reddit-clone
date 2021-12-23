import classes from './CommentSection.module.css';
import WriteComment from './WriteComment';
import CommentsList from './CommentsList';

const CommentSection = (props) => {
  return (
    <div className={classes.wrapper}>
        <WriteComment/>
        <CommentsList/>
    </div>
  );
}

export default CommentSection;
