import classes from './PostFeed.module.css';
import Post from './Post';

// Rendering static posts for now
const PostFeed = (props) => {
  return (
    <div className={classes.wrapper}>
        {props.postsList.map((post) => (
            <Post subreddit="" post_id={post.post_id} title={post.title} content={post.content} author_id={post.author_id} author_username={post.author_username} onRemovePost={props.onRemovePost}/>
        ))}
        {/* <Post subreddit="funny" post_id={"null"} title={"How to find love in a world so cruel? (Dummy)"}/> */}
        {/* <Post subreddit="memes" post_id={"null"} title={"How to find love in a world so cruel? (Dummy)"}/> */}
        {/* <Post subreddit="cute" post_id={"null"} title={"How to find love in a world so cruel? (Dummy)"}/> */}
    </div>
  );
}

export default PostFeed;
