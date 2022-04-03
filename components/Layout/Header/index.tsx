import { chakra, useBreakpointValue } from '@chakra-ui/react';
import BurgerHeader from './BurgerHeader';
import StandardHeader from './StandardHeader';

const Header = () => {
  const ResponsiveHeader = useBreakpointValue({ base: BurgerHeader, md: StandardHeader });

  if (ResponsiveHeader === undefined) return null;
  return (
    <chakra.header boxShadow="md" position="sticky" top={0} zIndex={3}>
      <ResponsiveHeader />
    </chakra.header>
  );
};

export default Header;
