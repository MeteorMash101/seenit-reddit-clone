import classes from './Post.module.css';
import VoteBar from './VoteBar.js';
import MiniHeader from './MiniHeader';
import { Link } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className={classes.wrapper}>
        <VoteBar/>
        <Link to='/post' className={classes.postBody} style={{background: props.color}}>
          <MiniHeader subreddit={props.subreddit}/>
          {/* title of post */}
          <h2 className={classes.postTitle}>How to find love in a world so cruel?</h2>
          <p className={classes.postContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Link>
    </div>
  );
}

export default Post;