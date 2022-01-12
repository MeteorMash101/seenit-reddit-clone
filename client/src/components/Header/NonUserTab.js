import { Fragment, useState } from 'react';
import classes from './NonUserTab.module.css';
import AccountOverlay from '../Pages/AccountOverlay';

const NonUserTab = (props) => {
  const [showModal, setShowModal] = useState({show: false, title: "", displayMsg: ""});
  // EDIT handle sign up as well
  const loginHandler = () => {
    setShowModal({show: true, title: "Login", displayMsg: "Welcome back!"})
  }
  const signUpHandler = () => {
    setShowModal({show: true, title: "Sign Up", displayMsg: "Thanks for signing up! :)"})
  }
  const exitModalHandler = () => {
    setShowModal({show: false, title: "", displayMsg: ""});
  };
  return (
    <Fragment>
      {showModal.show && 
        <AccountOverlay onClose={exitModalHandler} showModal={showModal}/>
      }
      <div className={classes.wrapper}>
        <button className={classes.btn} onClick={loginHandler}>Login</button>
        <button className={classes.btn} onClick={signUpHandler} id={classes.signup}>Sign Up</button>
      </div>
    </Fragment>
  );
}

export default NonUserTab;
