import { Fragment } from 'react';
import Header from '../Header/Header.js';
import classes from './PostView.module.css';
import PostFull from '../Posts/PostFull';

const PostView = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.wrapper}>
          <PostFull/>
      </div>
    </Fragment>
  );
}

export default PostView;
