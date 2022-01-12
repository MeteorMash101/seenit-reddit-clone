// Somewhat temporary component class, just to make CRUD testing lifestyle easier...
// will render dif. forms for editing posts and comments.
import classes from './EditOrRemoveBtns.module.css';
const EditOrRemoveBtns = (props) => {
  const removePostHandler = () => {
    props.onRemovePost(props.post_id)
  }
  return (
    <div className={classes.wrapper}>
        <button className={classes.btn} id={classes.edit}>Edit</button>
        <button className={classes.btn} id={classes.remove} onClick={removePostHandler}>Remove</button>
    </div>
  );
}

export default EditOrRemoveBtns;
