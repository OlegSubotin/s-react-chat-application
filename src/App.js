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
  const [messages, setMessages] = useLocalStorage('messages', []);
  const sendNewMessage = message => {
    const newMessage = {
      message,
      date: getCurrentDate('/'),
      time: `${hours}:${minutes}:${seconds}`,
    };
    console.log(newMessage);
    setMessages(messages => [newMessage, ...messages]);
    console.log(messages);
  };

  return (
    <Container>
      <SectionChats>
        <UserProfile />
        <SectionTitle />
        <ChatsList chats={db} />
      </SectionChats>
      <SectionMessages>
        <ContactProfile />
        <Chat />
        <MessageForm onSubmit={sendNewMessage} />
      </SectionMessages>
    </Container>
  );
};

export default App;
