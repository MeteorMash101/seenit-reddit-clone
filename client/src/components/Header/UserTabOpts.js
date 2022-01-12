import { useContext } from 'react';
import classes from './UserTabOpts.module.css';
import UserContext from '../../store/user-context';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserTabOpts = (props) => {
	const userCtx = useContext(UserContext);

	// When the user logs out...make sure passport knows!
	const logoutHandler = (event) => {
		event.preventDefault();
		// axios.post("http://localhost:4000/logout")
		// 	.then(res => {
		// 		console.log("Successful logout...", res.data);
		// 		props.onLogout();
		// 	})
		// 	.catch(err => {
		// 		console.log("Error logging out user!");
		// 	})
    userCtx.setIsLoggedIn(false);
	}

  return (
    <div className={classes.wrapper}>
	  	<Link to="/user" style={{ textDecoration: 'none' }}>
			<button className={classes.selectOpt}>Profile</button>
		</Link>
			<button className={classes.selectOpt} onClick={logoutHandler}>Logout</button>
		</div>
  );
}

export default UserTabOpts;
