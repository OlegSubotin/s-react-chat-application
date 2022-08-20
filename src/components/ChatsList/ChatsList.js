import moment from 'moment';
import s from './ChatsList.module.css';

const findMessageWithLastTime = arr => {
  let latestMessage = Math.max(...arr.map(el => el.time));
  for (const el of arr) {
    if (Number(el.time) === latestMessage) {
      return el;
    }
  }
};

const convertMsToData = num => {
  return moment(num).format('LL');
};

const ChatsList = ({ chats }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {chats.map(({ id, name, image, online, chat }) => (
          <li className={s.item} key={id}>
            <div className={s.contactWrapper}>
              <div className={s.avatarWrapper}>
                <img
                  className={s.image}
                  src={image}
                  alt="contact avatar"
                  width="40"
                  height="40"
                />
                <span className={online ? s.online : s.offline}></span>
              </div>
              <div className={s.contactDescription}>
                <span className={s.name}>{name}</span>
                <span className={s.message}>
                  {findMessageWithLastTime(chat).message}
                </span>
              </div>
            </div>
            <span className={s.date}>
              {convertMsToData(Number(findMessageWithLastTime(chat).time))}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
