import { useState } from 'react';
import classes from './PostOpts.module.css';

const PostOpts = (props) => {
  // const [submissionType, setSubmissionType] = useState("post"); // post opt. by default
  // B/c whole component gets re-rendered when state change, this should init the 'selected's.
  let pSelected = "", IASelected = "", lSelected = "";
  switch(props.formType) {
    case "post":
      pSelected = classes.selected;
      break;
    case "IA":
      IASelected = classes.selected;
      break;
    case "link":
      lSelected = classes.selected;
      break;
    default:
      // continue
  }
  const optionChangedHandler = (event) => {
    if (event.target.name == "post") {
      // setSubmissionType("post")
      props.onSetFormType("post")
    } else if (event.target.name == "IA") {
      // setSubmissionType("IA")
      props.onSetFormType("IA")
    } else if (event.target.name == "link") {
      // setSubmissionType("link")
      props.onSetFormType("link")
    }
  }
  return (
    <div className={classes.wrapper}>
        <button name="post" type="button" className={classes.btn} id={pSelected} onClick={optionChangedHandler}>Post</button>
        <button name="IA" type="button" className={classes.btn} id={IASelected} onClick={optionChangedHandler}>Images / Audio</button>
        <button name="link" type="button" className={classes.btn} id={lSelected} onClick={optionChangedHandler}>Link</button>
    </div>
  );
}

export default PostOpts;
