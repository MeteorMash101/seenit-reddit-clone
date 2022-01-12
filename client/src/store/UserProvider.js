// The purpose of this User Provider component is to provide the state of the user to components that need it.
// (We build off of the user-context from before)
// Whenever the user state changes here, all users of this Provider will be re-evaluated.
import { useReducer, useState } from 'react';
import UserContext from './user-context';

const defaultUserState = { // this will actually be initialized when we first load the user from DB.
  username: "",
	user_id: "",
	isLoggedIn: false,
  postUpvotes: new Set(),
	postDownvotes: new Set(),
	commentUpvotes: new Set(),
	commentDownvotes: new Set(),
};
// (OLD) const ADD_POST = "ADD_POST", REM__POST = "REM_POST", ADD__COMM = "ADD_COMM", REM_COMM = "REM_COMM", ADD_USER_SUB = "ADD_SUB", REM_USER_SUB = "REM_SUB";
const ADD_POST_UPVOTE = "ADD_POST_UPVOTE", ADD_POST_DOWNVOTE = "ADD_POST_DOWNVOTE", REM_POST_UPVOTE = "REM_POST_UPVOTE", REM_POST_DOWNVOTE = "REM_POST_DOWNVOTE";
const SET_USERNAME = "SET_USERNAME", SET_USER_ID = "SET_USER_ID", SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
// 'state' the last state snapshot, 'action' dispatched by you/your code.
const userReducer = (state, action) => { // NOTE: we are guranteed by useReducer to be working w/ the most recent 'state'.
  // check for what type of action was dispatched first.
	let updatedPostUpvotes;
	let updatedPostDownvotes;
	switch (action.type) {
		case ADD_POST_UPVOTE: 
			updatedPostUpvotes = new Set(state.postUpvotes) // Create clone: working with state in immutable fashion is recommended.
			updatedPostUpvotes.add(action.post_id)
			return { // return new state snapshot.
				...state,
				postUpvotes: updatedPostUpvotes
			}
		case ADD_POST_DOWNVOTE:
			updatedPostDownvotes = new Set(state.postDownvotes)
			updatedPostDownvotes.add(action.post_id)
			return {
				...state,
				postDownvotes: updatedPostDownvotes
			}
		case REM_POST_UPVOTE:
			updatedPostUpvotes = new Set(state.postUpvotes)
			updatedPostUpvotes.delete(action.post_id)
			return {
				...state,
				postUpvotes: updatedPostUpvotes
			}
		case REM_POST_DOWNVOTE:
			updatedPostDownvotes = new Set(state.postDownvotes)
			updatedPostDownvotes.delete(action.post_id)
			return {
				...state,
				postDownvotes: updatedPostDownvotes
			}
		case SET_USERNAME:
			return {
				...state,
				username: action.username
			}
		case SET_USER_ID:
			return {
				...state,
				user_id: action.user_id
			}
		case SET_IS_LOGGED_IN:
			return {
				...state,
				isLoggedIn: action.status
			}
		default: // safety
			return defaultUserState;
	}
};

const UserProvider = (props) => {
  // [useReducer hook]
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

	// we expect to receive the post_id in these handlers
  const addPostUpvoteHandler = (post_id) => {
    dispatchUserAction({ type: ADD_POST_UPVOTE, post_id: post_id });
  };

  const removePostUpvoteHandler = (post_id) => {
    dispatchUserAction({ type: REM_POST_UPVOTE, post_id: post_id });
  };

  const addPostDownvoteHandler = (post_id) => {
    dispatchUserAction({ type: ADD_POST_DOWNVOTE, post_id: post_id });
  };

  const removePostDownvoteHandler = (post_id) => {
    dispatchUserAction({ type: REM_POST_DOWNVOTE, post_id: post_id });
  };

  const setUsernameHandler = (username) => {
    dispatchUserAction({ type: SET_USERNAME, username: username });
  };

	const setUserIDHandler = (user_id) => {
    dispatchUserAction({ type: SET_USER_ID, user_id: user_id });
  };

  const setIsLoggedInHandler = (bool) => {
    dispatchUserAction({ type: SET_IS_LOGGED_IN, status: bool });
  };

	const userContext = {
		username: "MeteorMash101", // EDIT: temp init. 
		user_id: "61cbc43e9f7044d9633b13b8", // EDIT: temp init. 
		isLoggedIn: true, // EDIT: temp init. 
		postUpvotes: userState.postUpvotes,
		postDownvotes: userState.postDownvotes,
		commentUpvotes: userState.commentUpvotes,
		commentDownvotes: userState.commentDownvotes,
		addPostUpvote: addPostUpvoteHandler,
		removePostUpvote: removePostUpvoteHandler,
		addPostDownvote: addPostDownvoteHandler,
		removePostDownvote: removePostDownvoteHandler,
		setUsername: setUsernameHandler,
		setUserID: setUserIDHandler,
		setIsLoggedIn: setIsLoggedInHandler
	};

  return (
    <UserContext.Provider value={userContext}>
      {/* Whatever components we wrap this Provider with, will have access to the user state. (check App.js)*/}
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
