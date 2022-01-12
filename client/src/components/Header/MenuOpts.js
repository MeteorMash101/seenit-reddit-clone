import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react';
import classes from './MenuOpts.module.css';
// WIP: make it scrollable options list.
const MenuOpts = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <div onClick={() => navigate('/r/funny')} className={classes.selectOpt}>
        r/Funny
      </div>
      <div onClick={() => navigate('/r/memes')}className={classes.selectOpt}>
        r/Memes
      </div>
      <div onClick={() => navigate('/r/cute')} className={classes.selectOpt}>
        r/Cute
      </div>
    </div>
  );
}

export default MenuOpts;
