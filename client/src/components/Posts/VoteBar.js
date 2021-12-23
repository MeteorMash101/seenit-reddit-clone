import { useState } from 'react';
import classes from './VoteBar.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const VoteBar = (props) => {
  const [vote, setVote] = useState(null);

  const upVoteHandler = (event) => {
    setVote("UP")
  }
  const undoUpVoteHandler = (event) => {
    setVote(null)
  }
  const downVoteHandler = (event) => {
    setVote("DOWN")
  }
  const undoDownVoteHandler = (event) => {
    setVote(null)
  }
  return (
    <div className={classes.wrapper}>
      {vote === "UP" ?         
        <BiUpArrowAlt id="up" size={40} color='green' onClick={undoUpVoteHandler}/>
        :
        <BiUpArrowAlt className={classes.upVote} id="up" size={40} color='darkgrey' onClick={upVoteHandler}/>
      }
      <h4>Vote</h4>
      {vote === "DOWN" ?         
        <BiDownArrowAlt id="up" size={40} color='red' onClick={undoDownVoteHandler}/>
        :
        <BiDownArrowAlt id="up" size={40} color='darkgrey' onClick={downVoteHandler}/>
      }    
    </div>
  );
}

export default VoteBar;
