import { Link } from 'react-router-dom';
import logo from '../logo.webp'
import './Nav.css'
function Nav() {
  return (
    <>
      <nav className="nav">
          <img src={logo} />
        <div id='button'>
          <Link to="/register">
            {' '}
            <button>Register</button>{' '}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
