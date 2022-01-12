import classes from './PostViewOpts.module.css';
import { CgComment } from "react-icons/cg";
import { FaAward } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

const PostViewOpts = (props) => {
	return (
		<div className={props.className}>
			<button className={classes.btn}>
				<CgComment size={18} className={classes.icon}/><p>[#] Comments</p>
			</button>
			<button className={classes.btn}>
				<FaAward size={18} className={classes.icon}/><p>Award</p>
			</button>
			<button className={classes.btn}>
				<FaShare size={18} className={classes.icon}/><p>Share</p>
			</button>
		</div>
	);
}

export default PostViewOpts;