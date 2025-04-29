import { useContext } from 'react';
import { AuthContext } from './AuthContextProvider';

export const useAuth = () => useContext(AuthContext);