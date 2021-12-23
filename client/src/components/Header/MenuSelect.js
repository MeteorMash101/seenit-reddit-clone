import classes from './MenuSelect.module.css';
import { ImHome3 } from "react-icons/im";

/* Just home menu for now */
const MenuSelect = (props) => {
  return (
    <div>
        <button className={classes.homeBtn}>
            <ImHome3 size={30}/>
            <h3 className={classes.homeBtnTxt}>Home</h3>
        </button>
    </div>
  );
}

export default MenuSelect;
