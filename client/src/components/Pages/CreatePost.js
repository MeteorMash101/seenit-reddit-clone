import { Fragment } from 'react';
import Header from '../Header/Header.js';
import classes from './CreatePost.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import Form from '../Posts/Form';
const CreatePost = (props) => {
  const subredditList = ["r/Funny"]
  return (
    <Fragment>
      <Header/>
      {/* emp container, shud probs make it root... */}
      <div className={classes.container}>
          <div className={classes.wrapper}>
              <h2>Create a post</h2>
              <h2>Select Subreddit:</h2>
              <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  r/Funny
              </Dropdown.Toggle>
              <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">r/Funny</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">r/Memes</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">r/Cute</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
              <Form submissionHandlers={props.submissionHandlers}/>
          </div>
      </div>
    </Fragment>
  );
}

export default CreatePost;
