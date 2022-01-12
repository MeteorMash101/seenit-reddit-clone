import { useState } from 'react';
import classes from './VoteBar.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

const VoteBar = (props) => {
  const [vote, setVote] = useState(null); // null === no vote.
  const [voteCount, setVoteCount] = useState(1); // default start at 1 updoot.

  const upVoteHandler = (event) => {
    setVote("UP");
    vote !== "DOWN" ? setVoteCount(voteCount + 1) : setVoteCount(voteCount + 2);
  }
  const undoUpVoteHandler = (event) => {
    setVote(null);
    setVoteCount(voteCount - 1);
  }
  const downVoteHandler = (event) => {
    setVote("DOWN");
    vote !== "UP" ? setVoteCount(voteCount - 1) : setVoteCount(voteCount - 2);
  }
  const undoDownVoteHandler = (event) => {
    setVote(null)
    setVoteCount(voteCount + 1);
  }
  return (
    <div className={classes.wrapper}>
      {vote === "UP" ?         
        <BiUpArrowAlt id="up" size={40} color='green' onClick={undoUpVoteHandler}/>
        :
        <BiUpArrowAlt className={classes.upVote} id="up" size={40} color='darkgrey' onClick={upVoteHandler}/>
      }
      <h4>{voteCount}</h4>
      {vote === "DOWN" ?    
        <BiDownArrowAlt id="up" size={40} color='red' onClick={undoDownVoteHandler}/>
        :
        <BiDownArrowAlt id="up" size={40} color='darkgrey' onClick={downVoteHandler}/>
      }    
    </div>
  );
}

export default VoteBar;
