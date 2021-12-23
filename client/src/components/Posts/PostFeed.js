import classes from './PostFeed.module.css';
import Post from './Post';

// Rendering static posts for now
const PostFeed = (props) => {
  return (
    <div className={classes.wrapper}>
        {props.posts.map((post) => (
            <Post subreddit=""/>
        ))}
        <Post subreddit="funny"/>
        <Post subreddit="memes"/>
        <Post subreddit="cute"/>
    </div>
  );
}

export default PostFeed;
