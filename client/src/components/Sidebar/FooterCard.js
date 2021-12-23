import classes from './FooterCard.module.css';
const FooterCard = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.linksContainer}>
        <div>
          <p>Help</p>
          <p>Reddit Coins</p>
          <p>Reddit Premium</p>
          <p>Reddit Gifts</p>
          <p>Communities</p>
          <p>Rereddit</p>
          <p>Topics</p>
        </div>
        <div style={{marginLeft: "25px"}}>
          <p>About</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Advertise</p>
          <p>Blog</p>
          <p>Terms</p>
          <p>Content Policy</p>
          <p>Privacy Policy</p>
          <p>Mod Policy</p>
        </div>
      </div>
      Seenit Inc © 2021 . All rights reserved

    </div>
  );
}

export default FooterCard;
