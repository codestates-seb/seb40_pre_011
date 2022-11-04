import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import LoginLogo from '../Login/LoginLogo';
import toolbarUserIcon from '../../images/toolbar_user_icon.svg';

const ModalWrapper = styled.section`
  position: absolute;
  top: 52px;
  right: -80px;
  width: 200px;
  max-height: 250px;
  display: ${props => (props.focus ? 'block' : 'none')};
  z-index: 20;
  color: var(--black-700);
  font-size: var(--font-12);
  background-color: var(--white);
  box-shadow: var(--bs-sm);
  text-align: left;
  border-radius: 7px;

  .userContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 5px 10px 5px;
  }
  .userLogo {
    display: flex;
  }
  .userInfo {
    text-align: center;
    > h3 {
      height: 30px;
    }
  }

  .userLogout {
    width: 70px;
  }
  .logoutBtn {
    border-radius: 3px;
    width: 100%;
    height: 35px;
    background-color: #0a95ff;
    border: 1px solid transparent;
    color: var(--white);
    cursor: pointer;
  }
`;

function BurgerModal({ focus, unfocus }) {
  const navigate = useNavigate();
  const { userId, userEmail } = useSelector(state => state.login);
  const closeFocus = useRef();

  const closeModal = e => {
    if (
      closeFocus &&
      (!closeFocus.current || !closeFocus.current.contains(e.target))
    ) {
      unfocus(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeModal);

    return () => {
      document.removeEventListener('mousedown', closeModal);
    };
  }, []);

  return (
    <ModalWrapper focus={focus} ref={closeFocus}>
      <article className="userContainer">
        <div className="userLogo">
          <LoginLogo logo={toolbarUserIcon} width="50px" height="50px" />
        </div>
        <div className="userInfo">
          <h3>{userId}</h3>
          <span>{userEmail}</span>
        </div>
        <div className="userLogout">
          <button className="logoutBtn" onClick={() => navigate('/logout')}>
            Logout
          </button>
        </div>
      </article>
    </ModalWrapper>
  );
}

export default BurgerModal;
