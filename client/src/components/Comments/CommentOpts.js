import { Fragment } from 'react';
import classes from './CommentOpts.module.css';
import VoteComment from './VoteComment.js';
import { BsReply } from "react-icons/bs";
import { useState } from 'react';
import WriteComment from './WriteComment';

const CommentOpts = (props) => {
  // When we show reply form, we also need to get rid of the "comment as" header & show a cancel option.
  const [showReplyForm, setShowReplyForm] = useState({show: false, hideCommentAs: false, showCancelOpt: false});
  const replyHandler = () => {
    setShowReplyForm({show: true, hideCommentAs: true, showCancelOpt: true});
  }
  const cancelReplyHandler = () => {
    setShowReplyForm({show: false, hideCommentAs: false, showCancelOpt: false});
  }
  return (
    <Fragment>
      <div className={classes.wrapper}>
          <VoteComment/>
          <button className={classes.btns} onClick={replyHandler}><BsReply/> Reply</button>
          <button className={classes.btns}>Give Award</button>
          <button className={classes.btns}>Report</button>
          <button className={classes.btns}>Follow</button>
      </div>
      {showReplyForm.show && <WriteComment hideCommentAs={showReplyForm.hideCommentAs} showCancelOpt={showReplyForm.showCancelOpt} onCancel={cancelReplyHandler}/>}
    </Fragment>
  );
}

export default CommentOpts;
