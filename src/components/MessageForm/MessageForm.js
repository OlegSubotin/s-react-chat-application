import s from './MessageForm.module.css';

const MessageForm = ({ message, onMessageChange }) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={onMessageChange}
        />
      </label>
      <button type="submit" className={s.btn}>
        Send
      </button>
    </div>
  );
};

export default MessageForm;
