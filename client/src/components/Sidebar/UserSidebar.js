import classes from './UserSidebar.module.css';
import FooterCard from './FooterCard.js';
import UserCard from './UserCard';

const UserSidebar = (props) => {
  return (
    <div className={classes.wrapper}>
        <UserCard/>
        <FooterCard/>
    </div>
  );
}

export default UserSidebar;
