import { useState } from 'react';
import classes from './VoteComment.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
const VoteComment = (props) => {
  const [vote, setVote] = useState(null);
  const [voteCount, setVoteCount] = useState(1); // default start at 1 updoot.

  const upVoteHandler = (event) => {
    setVote("UP")
    vote !== "DOWN" ? setVoteCount(voteCount + 1) : setVoteCount(voteCount + 2);
  }
  const undoUpVoteHandler = (event) => {
    setVote(null)
    setVoteCount(voteCount - 1);
  }
  const downVoteHandler = (event) => {
    setVote("DOWN")
    vote !== "UP" ? setVoteCount(voteCount - 1) : setVoteCount(voteCount - 2);
  }
  const undoDownVoteHandler = (event) => {
    setVote(null)
    setVoteCount(voteCount + 1);
  }
  return (
    <div className={classes.wrapper}>
      {vote === "UP" ?         
        <BiUpArrowAlt size={20} color='green' onClick={undoUpVoteHandler}/>
        :
        <BiUpArrowAlt size={20} color='black' onClick={upVoteHandler}/>
      }
      <h4>{voteCount}</h4>
      {vote === "DOWN" ?         
        <BiDownArrowAlt size={20} color='red' onClick={undoDownVoteHandler}/>
        :
        <BiDownArrowAlt size={20} color='black' onClick={downVoteHandler}/>
      }
    </div>
  );
}

export default VoteComment;