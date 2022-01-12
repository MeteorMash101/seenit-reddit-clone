import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Header from '../Header/Header.js';
import classes from './PostView.module.css';
import PostFull from '../Posts/PostFull';

const PostView = (props) => {
  const { post_id } = useParams();
  console.log("[DEBUG]: post_id: ", post_id)
  return (
    <Fragment>
      <Header/>
      <div className={classes.wrapper}>
          <PostFull post_id={post_id} onRemovePost={props.onRemovePost}/>
      </div>
    </Fragment>
  );
}

export default PostView;
