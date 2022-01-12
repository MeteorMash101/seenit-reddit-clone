import { useState } from 'react';
import { Fragment } from 'react';
import classes from './UserTab.module.css';
import userLogo from '../imgs/userlogo.png';
import { ImGlass } from 'react-icons/im';
import UserTabOpts from './UserTabOpts';

const UserTab = (props) => {
  const [showOpts, setShowOpts] = useState(false);
  const showOptsHandler = (event) => {
    event.preventDefault();
    setShowOpts(!showOpts);
  }

  return (
    <Fragment>
      <div className={classes.wrapper} to="/user" style={{ textDecoration: 'none' }}>
          {/* EDIT: temp, have img. click logout */}
          <img src={userLogo} className={classes.logo} onClick={showOptsHandler}/>
          <div className={classes.wrapper2} onClick={showOptsHandler}>
            <h5 className={classes.username}>MeteorMash101</h5>
            <p>Karma: <span>[Number]</span></p>
          </div>
          {showOpts && <UserTabOpts/>}
      </div>
    </Fragment>
  );
}

export default UserTab;
