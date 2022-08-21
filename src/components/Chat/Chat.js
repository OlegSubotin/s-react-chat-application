import s from './Chat.module.css';

const Chat = ({ contact }) => {
  const getArr = arr => {
    if (!arr) {
      return;
    }
    const massive = [];
    arr.map(el => massive.push(el.time));
    let sortedArr = massive.sort((a, b) => b - a);
    sortedArr.forEach(el => {
      if ((sortedArr.indexOf(el) + 1) % 2) {
        let myMessage = contact.chat.find(option => option.time === el);
        return myMessage;
      } else {
        let hisMessage = contact.chat.find(option => option.time === el);
        console.log(hisMessage);
      }
    });
  };

  return (
    <div className={s.wrapper}>
      {!contact || contact?.chat?.length === 0 ? (
        <></>
      ) : (
        <>
          <div className={s.messageWrapper}>
            <div id="list" className={s.photoText}>
              <img
                className={s.image}
                src={contact.image}
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
        </>
      )}
    </div>
  );
};

export default Chat;
