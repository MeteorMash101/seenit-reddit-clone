import { Fragment } from 'react';
import classes from './SubFeed.module.css';
import Header from '../Header/Header';
import SubHeader from '../Header/SubHeader';
import SubSidebar from '../Sidebar/SubSidebar';
import PostFeed from '../Posts/PostFeed';

const SubFeed = (props) => {
  return (
    <Fragment>
      <Header/>
      <div className={classes.container}>
        <SubHeader/>
        <div className={classes.wrapper}>
          <PostFeed posts={props.posts}/>
          <SubSidebar/>
        </div>
      </div>
    </Fragment>
  );
}

export default SubFeed;