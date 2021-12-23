import logo from '../imgs/rl2.png';
import classes from './LogoNTitle.module.css';
import { Link } from 'react-router-dom';

const LogoNTitle = (props) => {
  return (
	  	<Link to="/" style={{ textDecoration: 'none' }}>
			<button className={classes.wrapper}>
				{/* Logo + Website Name wrapper div */}
				<img className={classes.logo} src={logo} alt="Logo"/>
				<h1 className={classes.h1}>Seenit</h1>
			</button>
		</Link>
  );
}

export default LogoNTitle;
