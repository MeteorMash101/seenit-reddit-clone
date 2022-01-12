import classes from './Sidebar.module.css';
import TopCommsCard from './TopCommsCard.js';
import AdCard from './AdCard.js';
import FooterCard from './FooterCard.js';
import ad1 from '../imgs/tempAd.jpg';
import ad2 from '../imgs/tempAd2.jpg';


const Sidebar = (props) => {
  return (
    <div className={classes.wrapper}>
        <TopCommsCard/>
        <AdCard adPic={ad1}/>
        <AdCard adPic={ad2}/>
        <FooterCard/>
    </div>
  );
}

export default Sidebar;
