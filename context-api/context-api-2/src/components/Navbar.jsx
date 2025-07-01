import { Button, useToast } from '@chakra-ui/react'; // Ensure this is the correct import
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
  const toast = useToast(); // Use the hook
  const { isAuthenticated, toggleAuth } = useAuth();

  const handleAuthClick = () => {
    try {
      toggleAuth();
      toast({
        title: isAuthenticated ? 'Logged out' : 'Logged in',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Button 
        colorScheme={isAuthenticated ? 'red' : 'green'}
        onClick={handleAuthClick}
      >
        {isAuthenticated ? 'Log Out' : 'Log In'}
      </Button>
    </nav>
  );
};