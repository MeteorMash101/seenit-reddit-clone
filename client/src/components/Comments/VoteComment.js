import { useState } from 'react';
import classes from './VoteComment.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const VoteComment = (props) => {
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
        <BiUpArrowAlt size={20} color='green' onClick={undoUpVoteHandler}/>
        :
        <BiUpArrowAlt size={20} color='black' onClick={upVoteHandler}/>
      }
      <h4>20</h4>
      {vote === "DOWN" ?         
        <BiDownArrowAlt size={20} color='red' onClick={undoDownVoteHandler}/>
        :
        <BiDownArrowAlt size={20} color='black' onClick={downVoteHandler}/>
      }
    </div>
  );
}

export default VoteComment;