import { useContext } from 'react'; 
import classes from './Header.module.css';
import LogoNTitle from './LogoNTitle.js'
import MenuSelect from './MenuSelect.js';
import SearchBar from './SearchBar';
import CreateButton from './CreateButton';
import UserTab from './UserTab';
import NonUserTab from './NonUserTab';
import UserContext from '../../store/user-context';


const Header = (props) => {
  const userCtx = useContext(UserContext);
  return (
    <div className={classes.header}>
      <LogoNTitle/>
      <MenuSelect/>
      <SearchBar/>
      <CreateButton/>
      {userCtx.isLoggedIn && <UserTab/>}
      {!userCtx.isLoggedIn && <NonUserTab/>}
    </div>
  );
}

export default Header;
