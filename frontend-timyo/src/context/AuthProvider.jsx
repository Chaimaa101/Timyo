import { createContext, useEffect, useState } from "react";
import api from "../services/axios"; 

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    try {
  
      const res = await api.get(`/api/user`); 
      setUser(res.data);
    } catch (error) {
      console.log("Auth check error:", error.response?.data);
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
  
      await api.post(
        `/api/login`, 
        { email, password } 
      );

      await checkAuth();
    } catch (error) {
      console.log("Login error:", error.response?.data);
    }
  };

  const register = async (firstName, lastName, email, password, password_confirmation) => {
  try {
    const res = await api.post( 
      `/api/register`, 
      { firstName, lastName, email, password, password_confirmation }
    );
  
    console.log(res.data.message); 

    await checkAuth();
  } catch (error) {
    console.log("Register error:", error.response?.data);
  }
};


  return (
    <AuthContext.Provider value={{ user, login, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;