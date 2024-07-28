import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    if (!token) {
      navigate('/register');
    }
  }, [navigate]);

  const logOut = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/register');
  };

  return { isAuthenticated, logOut };
};
