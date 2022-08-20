import Container from 'components/Container';
import SectionChats from 'components/SectionChats';
import SectionMessages from 'components/SectionMessages';

import UserProfile from 'components/UserProfile';
import SectionTitle from 'components/SectionTitle';
import ChatsList from 'components/ChatsList';

import ContactProfile from 'components/ContactProfile';
import Chat from 'components/Chat';
import MessageForm from 'components/MessageForm';

const App = () => {
  return (
    <Container>
      <SectionChats>
        <UserProfile />
        <SectionTitle />
        <ChatsList />
      </SectionChats>
      <SectionMessages>
        <ContactProfile />
        <Chat />
        <MessageForm />
      </SectionMessages>
    </Container>
  );
};

export default App;
