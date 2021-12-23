import classes from './Sidebar.module.css';
import TopCommsCard from './TopCommsCard.js';
import AdCard from './AdCard.js';
import FooterCard from './FooterCard.js';
const Sidebar = (props) => {
  return (
    <div className={classes.wrapper}>
        <TopCommsCard/>
        <AdCard/>
        <FooterCard/>
    </div>
  );
}

export default Sidebar;
