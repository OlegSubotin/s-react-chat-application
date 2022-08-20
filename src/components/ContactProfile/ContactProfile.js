import s from './ContactProfile.module.css';

const ContactProfile = () => {
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
      <h2 className={s.title}>Nicole Black</h2>
    </div>
  );
};

export default ContactProfile;
