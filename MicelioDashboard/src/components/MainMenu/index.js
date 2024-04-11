import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Button } from '@chakra-ui/react';
import Api from '../../services/Api';

const MainMenu = () => {
  const [isLoading, setIsLoading] = useState(true); // Removido setIsLoading
  const [isAuth, setIsAuth] = useState(false); // Removido isAuth

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await Api.get('/check-auth');
        setIsAuth(response.data.isAuth);
        setIsLoading(false);
      } catch (error) {
        console.error('Error checking auth status:', error);
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  return (
    <Flex justify="space-between" align="center" p="4">
      <Box>
        <Link to="/">
          <Button variant="link">Home</Button>
        </Link>
        <Link to="/dashboard">
          <Button variant="link">Dashboard</Button>
        </Link>
      </Box>
      <Box>
        {!isLoading && (
          <>
            {isAuth ? (
              <Link to="/logout">
                <Button>Logout</Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            )}
          </>
        )}
      </Box>
    </Flex>
  );
};

export default MainMenu;
