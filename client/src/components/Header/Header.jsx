import { Link } from 'react-router-dom';
import Head from './Head';
import search from '../../images/search.png';
import logo from '../../images/logo.png';
import hambugervar from '../../images/hambugervar.png';

function Header() {
  return (
    <Head>
      <img src={hambugervar} alt="sidebar" className="ham" />
      <Link href="/" className="logobar">
        <img src={logo} alt="logo" />
      </Link>

      <Link href="/" className="nav About">
        About
      </Link>
      <Link href="/" className="nav Products">
        Products
      </Link>
      <Link href="/" className="nav Teams">
        For Teams
      </Link>

      <label htmlFor="ser" className="inputbox">
        <img src={search} alt="search" />
        <input id="ser" placeholder="Search.." />
      </label>

      <button type="button" className="Login">
        Login
      </button>
      <button type="button" className="SignUp">
        Sign Up
      </button>
    </Head>
  );
}

export default Header;
