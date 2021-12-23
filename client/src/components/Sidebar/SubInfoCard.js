import classes from './SubInfoCard.module.css';
const SubInfoCard = (props) => {
  return (
    <div className={classes.wrapper}>
			<h4 className={classes.h4}>About Community</h4>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <div className={classes.stats}>
        <div>
          <div><b>1.2m</b></div><div>players</div>
        </div>
        <div>
          <div><b>2.3k</b></div><div>online</div>
        </div>
      </div>
      <p>Created on June 29th, 2008</p>
      <button className={classes.btn}>Create Post</button>
    </div>
  );
}

export default SubInfoCard;
