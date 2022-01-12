import classes from './WriteComment.module.css';
import UserContext from '../../store/user-context';
import { useContext, useState } from 'react';

const WriteComment = (props) => {
  const [enteredComment, setEnteredComment] = useState('');
  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value)
  }
  const addCommentHandler = (event) => {
    event.preventDefault();
    // EDIT: add err checking
    props.onAddComment(enteredComment)
  }
  const userContext = useContext(UserContext);
  return (
    <div className={classes.wrapper}>
        {!props.hideCommentAs && <p>Comment as <span className={classes.username}>{userContext.username}</span></p>}
        {props.hideCommentAs && <span className={classes.tempHack}/>}
        <form>
            <textarea type="text" className={classes.commentTxt} placeholder="What are your thoughts?" value={enteredComment} onChange={commentChangeHandler}/>
        </form>
        <button className={classes.postCmt} onClick={addCommentHandler}>Post Comment</button>
        {props.showCancelOpt && <button className={classes.postCmt} onClick={props.onCancel}>Cancel</button>}
    </div>
  );
}

export default WriteComment;
