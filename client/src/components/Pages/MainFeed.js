import { Fragment } from 'react';
import Header from '../Header/Header.js';
import classes from './MainFeed.module.css';
import PostFeed from '../Posts/PostFeed.js';
import Sidebar from '../Sidebar/Sidebar.js';

// Rendering static posts for now
const MainFeed = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <PostFeed posts={props.posts}/>
        <Sidebar/>
      </div>
    </Fragment>
  );
}

export default MainFeed;
