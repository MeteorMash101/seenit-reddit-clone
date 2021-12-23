import classes from './CreateButton.module.css';
import { Link } from 'react-router-dom';

const CreateButton = (props) => {
  return (
    <div className={classes.wrapper}>
      <Link to="/new">
        <button className={classes.createBtn}>+</button>
      </Link>
    </div>
  );
}

export default CreateButton;
