import { Fragment, useState } from 'react';
import classes from './Form.module.css';
import PostForm from './PostForm';
import IAForm from './IAForm';
import PostOpts from './PostOpts';

const Form = (props) => {
  const [formType, setFormType] = useState("post");
	const formChangeHandler = (formChoice) => {
		setFormType(formChoice)
	}
  return (
    <Fragment>
      {(formType == "post") && <PostForm submissionHandlers={props.submissionHandlers} formType={formType} onSetFormType={formChangeHandler}/>}
      {(formType == "IA") && <IAForm submissionHandlers={props.submissionHandlers} formType={formType} onSetFormType={formChangeHandler}/>}
      {/* temp */}
      {(formType == "link") && <PostOpts formType={formType} onSetFormType={formChangeHandler}/>}
    </Fragment>
  );
}

export default Form;
