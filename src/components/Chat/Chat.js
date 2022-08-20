import s from './Chat.module.css';

const Chat = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.messageWrapper}>
        <div className={s.photoText}>
          <img
            className={s.image}
            src="https://cdn-icons-png.flaticon.com/512/616/616438.png"
            width="40"
            height="40"
            alt="user avatar"
          />
          <span className={s.questionWrapper}>
            <p className={s.question}>Hello! How Are you doing now?</p>
          </span>
        </div>
        <p className={s.questionTime}>4/12/22, 4:10AM</p>
      </div>
      <div className={s.answerWrapper}>
        <span className={s.textWrapper}>
          <p className={s.answer}>Hi! what'up</p>
        </span>
        <p className={s.answerTime}>4/12/22, 4:10AM</p>
      </div>
    </div>
  );
};

export default Chat;
