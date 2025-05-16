import { useEffect, useState } from 'react';
import styles from './Chat.module.scss';
import Button from '../Button/Button';

function Chat({ onClose, socket }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserName = localStorage.getItem('username');
    setUserName(getUserName || 'Unknown');

    if (!socket) return;

    const handleMessage = (event) => {
      try {
        const isJSON = event.data.startsWith('{') || event.data.startsWith('[');

        if (isJSON) {
          const data = JSON.parse(event.data);
          setMessages((prev) => [...prev, data]);
        } else {
          setMessages((prev) => [
            ...prev,
            { user: 'System', text: event.data },
          ]);
        }
      } catch (error) {
        console.error('Ошибка', error);
      }
    };

    socket.addEventListener('message', handleMessage);

    return () => {
      socket.removeEventListener('message', handleMessage);
    };
  }, [socket]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() && socket?.readyState === WebSocket.OPEN) {
      const messageData = {
        user: userName,
        text: input,
      };
      socket.send(JSON.stringify(messageData));
      setInput('');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>
          Game chat
          <svg className={styles.logoGameClub}>
            <use xlinkHref='src/icons/symbol.svg#icon-gaming'></use>
          </svg>
        </div>
        <button className={styles.btnCross} onClick={onClose}>
          <svg className={styles.logoCross}>
            <use xlinkHref='src/icons/symbol.svg#cross'></use>
          </svg>
        </button>
      </div>

      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.message}>
            <div className={styles.messageUserName}>{msg.user}</div>
            <div className={styles.messageText}>{msg.text}</div>
          </div>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.lowerFooter}>
          <input
            className={styles.input}
            type='text'
            placeholder='Введите сообщение...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className={styles.btnSent}>
            <svg className={styles.logoSent}>
              <use xlinkHref='src/icons/symbol.svg#sent'></use>
            </svg>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Chat;
