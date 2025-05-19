import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SideBar.module.scss';
import Chat from '../Chat/Chat';

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenChat, setIsOpenChat] = useState(false);
  const [socket, setSocket] = useState(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleToggleChat = () => {
    setIsOpenChat((prevIsOpenChat) => {
      const mustOpen = !prevIsOpenChat;

      if (mustOpen) {
        const ws = new WebSocket('ws://localhost:5000');
        ws.onopen;
        ws.onclose;
        setSocket(ws);
      } else {
        if (socket) {
          socket.close();
          setSocket(null);
        }
      }
      return mustOpen;
    });
  };

  return (
    <>
      <div className={styles.sidebar} onClick={toggleMenu}>
        <div className={styles.hamburger}></div>
        <div className={`${styles.menu} ${isOpen ? styles.menuActive : ''}`}>
          <div className={styles.menuContent}>
            <Link className={styles.link} to='/login'>
              Вход
            </Link>
            <Link className={styles.link} to='/register'>
              Регистрация
            </Link>
          </div>
        </div>
      </div>
      <img
        className={styles.chat}
        src='/chat.png'
        alt='Открыть чат'
        onClick={handleToggleChat}
      />
      {isOpenChat && (
        <div className={`${styles.chatPanel} ${styles.chatOpen}`}>
          <Chat onClose={handleToggleChat} socket={socket} />
        </div>
      )}
    </>
  );
}

export default SideBar;
