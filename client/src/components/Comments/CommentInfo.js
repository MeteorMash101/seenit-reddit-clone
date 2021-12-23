import classes from './CommentInfo.module.css';
import CommentOpts from './CommentOpts';
const CommentInfo = (props) => {
  return (
    <div>
        <h3 className={classes.username}>Username</h3><h3 className={classes.timeinfo}>8 hours ago</h3>
        <p>this is peek perfection. nothing can get more perfect than this play. When someone asks what perfect ow1 was, just show them this clip and be ready to catch them when they fall unconscious /s</p>
        <CommentOpts/>
    </div>
  );
}

export default CommentInfo;
