import { chakra, Box } from '@chakra-ui/react';
import { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => {
  return (
    <Box bgColor="#E5E5E5" minH="100vh">
      <Header />
      <chakra.main px="5%">{children}</chakra.main>
    </Box>
  );
};

export default Layout;
