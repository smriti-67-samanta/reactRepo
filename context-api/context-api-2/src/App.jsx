
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
      
      </AuthProvider>
    </ChakraProvider>
  );
}