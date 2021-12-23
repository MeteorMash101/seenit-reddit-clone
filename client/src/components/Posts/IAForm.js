import { useState } from 'react';
import classes from './IAForm.module.css';
import PostOpts from './PostOpts';
import MediaThumbnail from './MediaThumbnail.js';

const IAForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [uploadedFile, setUploadedFile] = useState(null);
	const [image, setImage] = useState(null);
	const [show, setShow] = useState(false);
	const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }
	const fileUploadHandler = (event) => {
		setUploadedFile(URL.createObjectURL(event.target.files[0]));
	}
	const addIAHandler = (event) => {
    event.preventDefault();
    // EDIT: add err checking
		// save to backend with FormData.
		console.log(enteredTitle, uploadedFile);
		// setImage(event.target.files[0]));
		setShow(true);
    // props.submissionHandlers.onAddIA(enteredTitle, )
  }
	
  return (
		<form onSubmit={addIAHandler} className={classes.wrapper}>
			{show && <MediaThumbnail file={uploadedFile}/>}
			<PostOpts formType={props.formType} onSetFormType={props.onSetFormType}/>
			<input 
				type="text" 
				id="title" 
				placeholder="Title" 
				className={classes.title} 
				value={enteredTitle}
				onChange={titleChangeHandler}
			/>
			<div className={classes.uploadContainer}>
				{/* EDIT: needs to say: "Drag and drop images or [Upload]" */}
				{/* onChange will keep track of when file has been uploaded/changed. */}
				<input type="file" onChange={fileUploadHandler} name="uploadedFile"/>
			</div>
			<button type="submit" className={classes.upload}>Submit</button> 
    </form>
  );
}

export default IAForm;