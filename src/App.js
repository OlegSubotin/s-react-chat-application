import ChatsList from 'components/ChatsList';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import UserProfile from 'components/UserProfile';

const App = () => {
  return (
    <Container>
      <UserProfile />
      <SectionTitle />
      <ChatsList />
    </Container>
  );
};

export default App;
