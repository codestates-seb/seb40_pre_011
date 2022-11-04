import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Head from './Head';
import search from '../../images/search.svg';
import logo from '../../images/stackoverflow-official.svg';
import hambugervar from '../../images/hambugervar.png';
import SearchContent from './Search';

function Header() {
  const popRef = useRef(null);
  const [searchPop, setSearchPop] = useState(false);

  const closeHandler = ({ target }) => {
    if (searchPop && !popRef.current.contains(target)) setSearchPop(false);
  };

  useEffect(() => {
    window.addEventListener('click', closeHandler);
    return () => {
      window.removeEventListener('click', closeHandler);
    };
  });

  return (
    <Head>
      <img src={hambugervar} alt="sidebar" className="ham" />
      <Link to="/" className="logobar">
        <img src={logo} alt="logo" width="150px" height="30px" />
      </Link>
      <Link to="/" className="nav About">
        About
      </Link>
      <Link to="/" className="nav Products">
        Products
      </Link>
      <Link to="/" className="nav Teams">
        For Teams
      </Link>

      <label htmlFor="ser" className={searchPop ? 'focusInputbox' : 'inputbox'}>
        <img className="search" src={search} alt="search" />
        <input
          ref={popRef}
          onClick={() => setSearchPop(true)}
          id="ser"
          placeholder="Search.."
        />
        {searchPop && <SearchContent />}
        {searchPop && <div className="arrow" />}
      </label>
      <Link to="/login">
        <button type="button" className="Login">
          Login
        </button>
      </Link>

      <Link to="/join">
        <button type="button" className="SignUp">
          Sign Up
        </button>
      </Link>
    </Head>
  );
}

export default Header;
