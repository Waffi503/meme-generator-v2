import {Link} from 'react-router-dom';
import './header.css';

export default function Header () {
  return (
    <header className="contain-header">
      <Link to="/">
      <img src="./logo/logo.Zo9v05" alt="Logo" className='logo'/>
      </Link>
    </header>
  );
}