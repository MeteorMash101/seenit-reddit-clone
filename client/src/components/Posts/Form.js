import { Fragment, useState } from 'react';
import classes from './Form.module.css';
import PostForm from './PostForm';
import IAForm from './IVForm';
import PostOpts from './PostOpts';

const Form = (props) => {
  const [formType, setFormType] = useState("TEXT");
	const formChangeHandler = (formChoice) => {
		setFormType(formChoice)
	}
  return (
    <Fragment>
      {(formType == "TEXT") && <PostForm submissionHandlers={props.submissionHandlers} formType={formType} onSetFormType={formChangeHandler}/>}
      {(formType == "IV") && <IAForm submissionHandlers={props.submissionHandlers} formType={formType} onSetFormType={formChangeHandler}/>}
      {/* temp */}
      {(formType == "LINK") && <PostOpts formType={formType} onSetFormType={formChangeHandler}/>}
    </Fragment>
  );
}

export default Form;
