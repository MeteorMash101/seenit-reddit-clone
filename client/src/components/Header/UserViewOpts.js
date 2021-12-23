import classes from './UserViewOpts.module.css';

const UserViewOpts = (props) => {
  const viewChangeHandler = (event) => {
    props.onChangeView(event.target.name)
  }
  console.log("currview", props.currView);
  let selectedView = ""
  switch (props.currView) {
    case "all":
      selectedView = "all"
      break;
    case "myPosts":
      selectedView = "myPosts"
      break;
    case "myComments":
      selectedView = "myComments"
      break;
    case "upvoted":
      selectedView = "upvoted"
      break;
    case "downvoted":
      selectedView = "downvoted"
      break;
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
          <button name="all" className={classes.btns} id={selectedView == "all" ? classes.selected : ''} onClick={viewChangeHandler}>All</button>
          <button name="myPosts" className={classes.btns} id={selectedView == "myPosts" ? classes.selected : ''} onClick={viewChangeHandler}>My Posts</button>
          <button name="myComments" className={classes.btns} id={selectedView == "myComments" ? classes.selected : ''} onClick={viewChangeHandler}>My Comments</button>
          <button name="upvoted" className={classes.btns} id={selectedView == "upvoted" ? classes.selected : ''} onClick={viewChangeHandler}>Upvoted</button>
          <button name="downvoted" className={classes.btns} id={selectedView == "downvoted" ? classes.selected : ''} onClick={viewChangeHandler}>Downvoted</button>
      </div>
    </div>
  );
}

export default UserViewOpts;