import s from './UserProfile.module.css';

const UserProfile = ({ text, onInputChange }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.imageContainer}>
        <img
          className={s.image}
          src="https://cdn-icons-png.flaticon.com/512/616/616438.png"
          width="40"
          height="40"
          alt="user avatar"
        />
        <span className={s.online}></span>
      </div>
      <label className={s.label}>
        <input
          className={s.input}
          type="text"
          placeholder="Search or start new chat"
          value={text}
          onChange={onInputChange}
        />
      </label>
    </div>
  );
};

export default UserProfile;
