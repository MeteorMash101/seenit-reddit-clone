import classes from './Header.module.css';
import LogoNTitle from './LogoNTitle.js'
import MenuSelect from './MenuSelect.js';
import SearchBar from './SearchBar';
import CreateButton from './CreateButton';
import UserTab from './UserTab';


const Header = (props) => {
  return (
    <div className={classes.header}>
      <LogoNTitle/>
      <MenuSelect/>
      <SearchBar/>
      <CreateButton/>
      <UserTab/>
    </div>
  );
}

export default Header;
