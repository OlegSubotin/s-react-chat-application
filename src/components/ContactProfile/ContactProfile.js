import s from './ContactProfile.module.css';

const ContactProfile = ({ contact }) => {
  return (
    <div className={s.wrapper}>
      {contact ? (
        <>
          <div className={s.imageContainer}>
            <img
              className={s.image}
              src={
                contact.image
                  ? contact.image
                  : 'https://cdn-icons-png.flaticon.com/512/616/616438.png'
              }
              width="40"
              height="40"
              alt="user avatar"
            />
            <span className={contact.online ? s.online : s.offline}></span>
          </div>
          <h2 className={s.title}>{contact.name}</h2>
        </>
      ) : (
        <h2 className={s.title}>
          Choose a contact you would like to talk with
        </h2>
      )}
    </div>
  );
};

export default ContactProfile;
