import { useState } from 'react';
// import { nanoid } from 'nanoid';

import Container from 'components/Container';
import SectionChats from 'components/SectionChats';
import SectionMessages from 'components/SectionMessages';

import UserProfile from 'components/UserProfile';
import SectionTitle from 'components/SectionTitle';
import ChatsList from 'components/ChatsList';

import ContactProfile from 'components/ContactProfile';
import Chat from 'components/Chat';
import MessageForm from 'components/MessageForm';

import { getCurrentDate, hours, minutes, seconds } from 'utils/getCurrentDate';
import useLocalStorage from 'hooks/useLocalStorage';
import db from './db.json';

const App = () => {
  const [chats, setChats] = useLocalStorage('chats', db);
  const [contact, setContact] = useState('');

  const sendNewMessage = message => {
    // const newMessage = {
    //   message,
    //   date: getCurrentDate('/'),
    //   time: `${hours}:${minutes}:${seconds}`,
    // };
    // setChats(chat => [newMessage, ...chats]);
  };

  const handleItemClick = e => {
    const id = e.currentTarget.id;
    findObject(id);
  };

  const findObject = id => {
    let db = JSON.parse(localStorage.getItem('chats'));
    for (const el of db) {
      if (el.id === Number(id)) {
        setContact(el);
      }
    }
  };

  return (
    <Container>
      <SectionChats>
        <UserProfile />
        <SectionTitle />
        <ChatsList chats={db} onClick={handleItemClick} />
      </SectionChats>
      <SectionMessages>
        <ContactProfile contact={contact} />
        <Chat contact={contact} />
        <MessageForm onSubmit={sendNewMessage} />
      </SectionMessages>
    </Container>
  );
};

export default App;
