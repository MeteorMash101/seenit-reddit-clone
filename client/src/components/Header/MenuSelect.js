import { Fragment } from 'react';
import { useState } from 'react';
import classes from './MenuSelect.module.css';
import { ImHome3 } from "react-icons/im";
import { MdArrowDropDownCircle } from "react-icons/md";
import MenuOpts from './MenuOpts';

const MenuSelect = (props) => {
  const [showOpts, setShowOpts] = useState(false);
  const showOptsHandler = () => {
    setShowOpts(!showOpts);
  }
  return (
    <div className={classes.container}>
      <div className={classes.wrapper} onClick={showOptsHandler}>
        <div className={classes.iconHome}>
          <ImHome3 size={30} className={classes.icon}/>
          <h3 className={classes.homeBtnTxt}>Home</h3>
        </div>
        <MdArrowDropDownCircle size={30}/>
      </div>
      {showOpts && <MenuOpts/>}
    </div>
  );
}

export default MenuSelect;