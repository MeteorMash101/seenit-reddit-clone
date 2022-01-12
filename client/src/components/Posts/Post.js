import classes from './Post.module.css';
import VoteBar from './VoteBar.js';
import MiniHeader from './MiniHeader';
import { Link } from 'react-router-dom';
import PostViewOpts from './PostViewOpts';

const Post = (props) => {
  // TEMP STUFF: random subreddit color idx 0, 1, 2
  const idx = Math.floor(Math.random() * 3); 
  const leddits = ["funny", "memes", "cute"];
  return (
    <div className={classes.wrapper}>
        <VoteBar/>
        <div className={classes.postBody}>
          <MiniHeader subreddit={leddits[idx]} post_id={props.post_id} author_id={props.author_id} author_username={props.author_username} onRemovePost={props.onRemovePost}/>
          {/* title of post */}
          <Link to={`/post/${props.post_id}`} className={classes.postLink}>
            <h2 className={classes.postTitle}>{props.title}</h2>
            {/* Default text for now...too long to have as input */}
            <p className={classes.postContent}>{props.content}</p>
            {/* This component is used elsewhere as well, so customize the CSS class like so. */}
            <PostViewOpts className={classes.postViewOpts}/>
          </Link>
        </div>
    </div>
  );
}

export default Post;