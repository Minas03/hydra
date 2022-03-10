import { Container } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <Container  maxW="container.xl" m="5" minH="100vh">
      <HomePage />
    </Container>
  );
};

export default App;
