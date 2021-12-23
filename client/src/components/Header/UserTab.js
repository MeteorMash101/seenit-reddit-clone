import classes from './UserTab.module.css';
import { Link } from 'react-router-dom';

const UserTab = (props) => {
  return (
    <Link to="/user" style={{ textDecoration: 'none' }}>
      <button>
          <h3>MeteorMash101             v</h3>
      </button>
    </Link>
  );
}

export default UserTab;
