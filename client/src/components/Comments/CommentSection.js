import classes from './CommentSection.module.css';
import WriteComment from './WriteComment';
import CommentsList from './CommentsList';

const CommentSection = (props) => {
  console.log("COMMENTS DATA: ", typeof(props.commentsData))
  // comments list state here?
  return (
    <div className={classes.wrapper}>
        <WriteComment post_id={props.post_id} onAddComment={props.onAddComment}/>
        <CommentsList commentsData={props.commentsData}/>
    </div>
  );
}

export default CommentSection;
