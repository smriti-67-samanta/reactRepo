import { ChakraProvider, Box, Flex, Grid, Button } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/color-mode';
import { useContext, useEffect } from 'react'; // Added useEffect import
import { AuthContext } from './AuthContext.jsx';
import { ThemeContext } from './ThemeContext.jsx';

function App() {
  const authContext = useContext(AuthContext);
  const themeContext = useContext(ThemeContext);
  
  // Error handling for contexts
  if (!authContext || !themeContext) {
    throw new Error('Context must be used within its Provider');
  }

  const { isLoggedIn, toggleAuth } = authContext;
  const { theme, toggleTheme } = themeContext;
  const { setColorMode } = useColorMode();

  // Sync Chakra UI's color mode with our theme context
  useEffect(() => {
    setColorMode(theme);
  }, [theme, setColorMode]);

  return (
    <ChakraProvider>
      <Flex
        as="nav"
        p="4"
        bg={theme === 'light' ? 'gray.100' : 'gray.700'}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button 
          onClick={toggleAuth}
          colorScheme={isLoggedIn ? 'red' : 'green'}
        >
          {isLoggedIn ? 'Log Out' : 'Log In'}
        </Button>
        <Button 
          onClick={toggleTheme}
          colorScheme="blue"
        >
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </Button>
      </Flex>
      
      <Grid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap="4" 
        p="4"
      >
        {['Card 1', 'Card 2', 'Card 3'].map((card) => (
          <Box 
            key={card} 
            p="4" 
            shadow="md" 
            bg={theme === 'light' ? 'gray.100' : 'gray.600'}
            borderRadius="md"
          >
            {card}
          </Box>
        ))}
      </Grid>
      
      <Box 
        as="footer" 
        p="4" 
        bg={theme === 'light' ? 'gray.200' : 'gray.800'}
        textAlign="center"
      >
        Footer Content
      </Box>
    </ChakraProvider>
  );
}

export default App;