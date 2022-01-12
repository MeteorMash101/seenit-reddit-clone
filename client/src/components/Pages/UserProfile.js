import { useState } from 'react';
import { Fragment } from 'react';
import classes from './UserProfile.module.css';
import Header from '../Header/Header';
import UserSidebar from '../Sidebar/UserSidebar';
import PostFeed from '../Posts/PostFeed';
import UserViewOpts from '../Header/UserViewOpts';

const UserProfile = (props) => {
  console.log("here")
  const [view, setView] = useState("all");
	const viewChangeHandler = (viewChoice) => {
		setView(viewChoice)
	}
  return (
    <Fragment>
      <Header/>
      <UserViewOpts onChangeView={viewChangeHandler} currView={view}/>
      <div className={classes.container}>
        <PostFeed postsList={props.postsList}/>
        <UserSidebar/>
      </div>
    </Fragment>
  );
}

export default UserProfile;