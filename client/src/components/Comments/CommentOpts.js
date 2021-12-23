import classes from './CommentOpts.module.css';
import VoteComment from './VoteComment.js';
import { BsReply } from "react-icons/bs";

const CommentOpts = (props) => {
  return (
    <div className={classes.wrapper}>
        <VoteComment/>
        <button className={classes.btns}><BsReply/> Reply</button>
        <button className={classes.btns}>Give Award</button>
        <button className={classes.btns}>Report</button>
        <button className={classes.btns}>Follow</button>
    </div>
  );
}

export default CommentOpts;
