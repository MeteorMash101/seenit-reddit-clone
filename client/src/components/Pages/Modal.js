// React Portal example, purpose: to keep our html clean.
import { Fragment } from 'react';
import ReactDOM from 'react-dom'; // for react portal.
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
// NOTE: Check index.html in public folder. (that is where these components are being 'portaled' to.)
// first get the HTML element...
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {/* not only are we specifying 'what' to portal, but also 'where'.*/}
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
