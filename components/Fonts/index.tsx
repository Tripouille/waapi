import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Aquatico';
        src: url('/fonts/Aquatico.otf'),
        local('Helvetica Neue'),
        local('sans-serif');
      }
      `}
  />
);

export default Fonts;
