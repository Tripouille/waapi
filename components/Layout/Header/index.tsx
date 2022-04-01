import { useBreakpointValue } from '@chakra-ui/react';
import BurgerHeader from './BurgerHeader';
import StandardHeader from './StandardHeader';

const Header = () => {
  const ResponsiveHeader = useBreakpointValue({ base: BurgerHeader, md: StandardHeader });

  if (ResponsiveHeader === undefined) return null;
  return <ResponsiveHeader />;
};

export default Header;
