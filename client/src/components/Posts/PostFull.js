import classes from './PostFull.module.css';
import VoteBar from './VoteBar.js';
import MiniHeader from './MiniHeader';
import CommentSection from '../Comments/CommentSection';
import PostViewOpts from './PostViewOpts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PostFull = (props) => {
  const [currPost, setCurrPost] = useState("Loading...");
  useEffect(() => {
    const fetchPost = async () => {
      const post = await axios.get(`http://localhost:4000/posts/${props.post_id}`)
      console.log("[DEBUG]: current post received from db:", post.data)
      setCurrPost(post.data)
    }
    fetchPost();
  }, [])
  const addCommentHandler = async (eComment) => {
    console.log("comment entered:", eComment)
    currPost.comments.push(eComment);
  }
  return (
    <div className={classes.wrapper}>
        <VoteBar/>
        <div className={classes.postFullBody}>
          <MiniHeader post_id={props.post_id} author_id={currPost.author_id} onRemovePost={props.onRemovePost}/>
          <h2 className={classes.postFullTitle}>{currPost.title}</h2>
          <p className={classes.postFullContent}>{currPost.content}</p>
          <PostViewOpts className={classes.postViewOpts}/>
          <CommentSection commentsData={currPost.comments} onAddComment={addCommentHandler}/>
        </div>
    </div>
  );
}

export default PostFull;
