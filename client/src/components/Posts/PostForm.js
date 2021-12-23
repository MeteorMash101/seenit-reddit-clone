import { useState } from 'react';
import classes from './PostForm.module.css';
import PostOpts from './PostOpts';

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value)
  }
  const addPostHandler = (event) => {
    event.preventDefault();
    // EDIT: add err checking
    props.submissionHandlers.onAddPost(enteredTitle, enteredText)
  }

  return (
		<form onSubmit={addPostHandler} className={classes.wrapper}>
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className={classes.title} 
				value={enteredTitle}
				onChange={titleChangeHandler}
			/>
			<textarea
				type="text" 
				id="text" 
				placeholder="Text (required)" 
				className={classes.textarea} 
				value={enteredText}
				onChange={textChangeHandler}
			/>
			<button type="submit" className={classes.submit}>Submit</button> 
    </form>
  );
}

export default PostForm;