import { useState } from 'react';
import classes from './PostOpts.module.css';

const PostOpts = (props) => {
  // B/c whole component gets re-rendered when state change, this should init the 'selected's.
  let pSelected = "", IVSelected = "", lSelected = "";
  switch(props.formType) {
    case "TEXT":
      pSelected = classes.selected;
      break;
    case "IV":
      IVSelected = classes.selected;
      break;
    case "LINK":
      lSelected = classes.selected;
      break;
    default:
      // continue
  }
  const optionChangedHandler = (event) => {
    if (event.target.name == "TEXT") {
      props.onSetFormType("TEXT")
    } else if (event.target.name == "IV") {
      props.onSetFormType("IV")
    } else if (event.target.name == "LINK") {
      props.onSetFormType("LINK")
    }
  }
  return (
    <div className={classes.wrapper}>
        <button name="TEXT" type="button" className={classes.btn} id={pSelected} onClick={optionChangedHandler}>Post</button>
        <button name="IV" type="button" className={classes.btn} id={IVSelected} onClick={optionChangedHandler}>Images / Video</button>
        <button name="LINK" type="button" className={classes.btn} id={lSelected} onClick={optionChangedHandler}>Link</button>
    </div>
  );
}

export default PostOpts;
