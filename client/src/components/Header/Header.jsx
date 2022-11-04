import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import Head from './Head';
import search from '../../images/search.svg';
import logo from '../../images/stackoverflow-official.svg';
import hambugervar from '../../images/hambugervar.png';
import SearchContent from './Search';
import LoginLogo from '../Login/LoginLogo';
import toolbarBurger from '../../images/toolbar_burger.svg';
import toolbarInbox from '../../images/toolbar_inbox.svg';
import toolbarQuestion from '../../images/toolbar_question.svg';
import toolbarTrophy from '../../images/toolbar_trophy.svg';
import toolbarUserIcon from '../../images/toolbar_user_icon.svg';
import BurgetModal from './BurgerModal';
import useLogin from '../../hook/useLogin';

function Header() {
  const [focus, setFocus] = useState(false);
  const { isLogin } = useLogin();
  const popRef = useRef(null);
  const [searchPop, setSearchPop] = useState(false);

  const closeHandler = ({ target }) => {
    if (searchPop && !popRef.current.contains(target)) setSearchPop(false);
  };

  useEffect(() => {
    if (!isLogin) {
      setFocus(false);
    }
  }, []);

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
        <img
          src={logo}
          alt="logo"
          width="150px"
          height="30px"
          className="logo"
        />
      </Link>

      {isLogin ? (
        <Link to="/" className="nav Products">
          Products
        </Link>
      ) : (
        <>
          <Link to="/" className="nav About">
            About
          </Link>
          <Link to="/" className="nav Products">
            Products
          </Link>
          <Link to="/" className="nav Teams">
            For Teams
          </Link>
        </>
      )}

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
      {isLogin ? (
        <nav className="loginToolbar">
          <ol>
            <li className="toolbar_user">
              <Link to="/user">
                <LoginLogo logo={toolbarUserIcon} width="24px" height="24px" />
                <span>1</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <LoginLogo logo={toolbarInbox} width="20px" height="16px" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <LoginLogo logo={toolbarTrophy} width="18px" height="18px" />
              </Link>
            </li>
            <li>
              <Link to="/">
                <LoginLogo logo={toolbarQuestion} width="18px" height="18px" />
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setFocus(prev => !prev)}>
                <LoginLogo logo={toolbarBurger} width="18px" height="18px" />
              </Link>
              <BurgetModal focus={focus} unfocus={setFocus} />
            </li>
          </ol>
        </nav>
      ) : (
        <>
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
        </>
      )}
    </Head>
  );
}

export default Header;
