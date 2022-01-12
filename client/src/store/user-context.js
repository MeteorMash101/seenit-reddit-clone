// We are store our 'application-wide' contexts in this '/store' folder.
import React from 'react';

const UserContext = React.createContext({
  // just dummy data (for auto-completion)
  username: "", // When username is "", we know that nobody is logged in.
  user_id: "",
  isLoggedIn: false, 
	setUsername: (username) => {},
	setUserID: (user_id) => {},
	setIsLoggedIn: (bool) => {},
	// Only keeping track of post & comments that the user has upvoted/downvoted.
	// Using a "set" structure to keep track of IDs can result in faster lookup times.
	// EDIT: impl. comments one as well...if proper.
	// EDIT: have this just be voteReducer? if want.
  postUpvotes: new Set(),
	postDownvotes: new Set(),
	commentUpvotes: new Set(),
	commentDownvotes: new Set(),
  // Methods listed here are for auto-complete.
  addPostUpvote: (post_id) => {},
	addPostDownvote: (post_id) => {},
  removePostUpvote: (post_id) => {},
	removePostDownvote: (post_id) => {},
});

export default UserContext;
// EDIT: add? onlineStatus: 
