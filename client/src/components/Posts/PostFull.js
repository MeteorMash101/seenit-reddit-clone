import classes from './PostFull.module.css';
import VoteBar from './VoteBar.js';
import MiniHeader from './MiniHeader';
import CommentSection from '../Comments/CommentSection';

const PostFull = (props) => {
  return (
    <div className={classes.wrapper}>
        <VoteBar/>
        <div className={classes.postFullBody}>
          <MiniHeader/>
          {/* title of PostFull */}
          <h2 className={classes.PostFullTitle}>How to find love in a world so cruel?</h2>
          <p className={classes.PostFullContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <CommentSection/>
        </div>
    </div>
  );
}

export default PostFull;
