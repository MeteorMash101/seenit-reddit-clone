// NOTE: Refer to udemy notes on how I 'reverse-engineered' this overlay functionality.
import ReactDOM from 'react-dom';
import { Fragment, useState, useContext } from 'react';
import classes from './AccountOverlay.module.css';
import image from '../imgs/overlay.jpg';
import axios from 'axios';
import UserContext from '../../store/user-context';

const portalElement = document.getElementById('overlays');
const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onClose}/>;
};
const AccountOverlay = (props) => {
	const userCtx = useContext(UserContext);
	const [enteredUsername, setEnteredUsername] = useState("testUser"); // temp inits...
	const [enteredPassword, setEnteredPassword] = useState("testUser");
	const usernameChangeHandler = (e) => {
		setEnteredUsername(e.target.value);
	}
	const passwordChangeHandler = (e) => {
		setEnteredPassword(e.target.value);
	}
	// When user logins/signs up, we need to 'authenticate' them.
	const authHandler = (event) => {
		event.preventDefault();
		const userCredentials = {
			username: enteredUsername,
			password: enteredPassword
		}
		axios.post("http://localhost:4000/register", userCredentials)
			.then(res => {
				console.log("Successful login/register...", res.data);
				setEnteredUsername("");
				setEnteredPassword("");
				props.onClose();
				userCtx.setUsername(res.data.username);
				userCtx.setUserID(res.data._id); // EDIT: this should default to "testUser"
				userCtx.setIsLoggedIn(true);
			})
			.catch(err => {
				console.log("Error logging in user!");
			})
	}
  return (
	<Fragment>
		{ReactDOM.createPortal(
			<Backdrop onClose={props.onClose}/>, 
			portalElement
		)}
		{ReactDOM.createPortal(
			<div className={classes.container}>
				<div className={classes.wrapper1}>
					{/* Either Login or Sign Up */}
					<h2>{props.showModal.title}</h2>
					<form onSubmit={authHandler}>
						<div>
							<label htmlFor="username">Username: </label><br/>
								<input
									id="username"
									name="username"
									type="text"
									onChange={usernameChangeHandler}
									value={enteredUsername}
								/>
						</div>
						<div>
							<label htmlFor="password">Password: </label><br/>
							<input
								id="password"
								name="password"
								type="text"
								onChange={passwordChangeHandler}
								value={enteredPassword}
							/>
						</div>
						<input type="submit" value="Login / Register" />
					</form>
				</div>
				<div className={classes.wrapper2}>
					<img className={classes.img} src={image}/>
					{/* change msg if sign in. */}
					<p className={classes.txt}>{props.showModal.displayMsg}</p>
				</div>
			</div>,
			portalElement
		)}
	</Fragment>
  );
}

export default AccountOverlay;
