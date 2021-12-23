import classes from './WriteComment.module.css';

const WriteComment = (props) => {
  return (
    <div className={classes.wrapper}>
        <p>Comment as <span className={classes.username}>MeteorMash101</span></p>
        <form>
            <textarea type="text" className={classes.commentTxt} placeholder="What are your thoughts?"/>
        </form>
        <button className={classes.postCmt}>Post Comment</button>
    </div>
  );
}

export default WriteComment;
