import { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import s from './MessageForm.module.css';

const MessageForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const message = e.target.value;
    setMessage(message);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!message.trim().length) {
      Notify.info('Try to write a message');
      return;
    }
    onSubmit(message);
    setMessage('');
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={s.btn}>
        Send
      </button>
    </form>
  );
};

export default MessageForm;
