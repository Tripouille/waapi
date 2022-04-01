import { extendTheme } from '@chakra-ui/react';
import Button from './components/Button';

const theme = extendTheme({
  colors: {
    success: {
      100: '#66FFEE',
      200: '#4DFFD5',
      300: '#33EDBB',
      400: '#1AD4A2',
      500: '#00BA88',
      600: '#00A16F',
      700: '#008755',
      800: '#006E3C',
      900: '#005422',
    },
  },
  fonts: {
    heading: 'Helvetica Neue, Open Sans, sans-serif',
    body: 'Helvetica Neue, Raleway, sans-serif',
  },
  components: {
    Button,
  },
});

export default theme;
