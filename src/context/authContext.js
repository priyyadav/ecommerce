import {createContext} from 'react';
import { useContext } from 'react';
const authContext = createContext();

const AuthProvider=({children})=> {
    const name = "priyanka yadav"
  return (
    <authContext.Provider value={name}>
       {children}
    </authContext.Provider>
  )
}

const useAuthContext = () => {
    return useContext(authContext);
  };

export { AuthProvider, useAuthContext };

