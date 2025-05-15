import styles from './Chat.module.scss';
import Button from '../Button/Button';

function Chat() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.name}>
          Game chat
          <svg className={styles.logoGameClub}>
            <use xlinkHref='src/icons/symbol.svg#icon-gaming'></use>
          </svg>
        </div>
        <button className={styles.btnCross}>
          <svg className={styles.logoCross}>
            <use xlinkHref='src/icons/symbol.svg#cross'></use>
          </svg>
        </button>
      </div>
      <div className={styles.messages}>
        <div className={styles.messageUserName}>romche</div>
        <div className={styles.messageText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          maxime!
        </div>
      </div>
      <form className={styles.form}>
        <div className={styles.lowerFooter}>
          <input
            className={styles.input}
            type='text'
            placeholder='Введите сообщение...'
          />
          <Button
            className={styles.btnSent}
            onClick={(e) => e.preventDefault()}
          >
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
