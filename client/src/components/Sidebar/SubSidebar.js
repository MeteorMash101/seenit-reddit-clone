import classes from './Sidebar.module.css';
import RulesCard from './RulesCard.js';
import SubInfoCard from './SubInfoCard.js';
import FooterCard from './FooterCard.js';

const Sidebar = (props) => {
  return (
    <div className={classes.wrapper}>
        <SubInfoCard/>
        <RulesCard/>
        <FooterCard/>
    </div>
  );
}

export default Sidebar;
