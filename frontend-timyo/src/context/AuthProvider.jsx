import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios, { getCsrfCookie } from "../services/axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);


 const login = async (email, password) => {
  try {
    setLoading(true);

    await getCsrfCookie();
    const res = await axios.post("api/login", { email, password });

    console.log(res)  
    setLoggedIn(true)
    setUser( res.data.user)
    return {
      success: true,
      loggedIn: loggedIn
    };
  } catch (error) {
    console.log(error)
  } finally {
    setLoading(false);
  }
};

  const register = async (
    firstName,
    lastName,
    email,
    password,
    password_confirmation
  ) => {
    try {
      setLoading(true);

      await getCsrfCookie();
      const res = await axios.post(`api/register`, {
        firstName,
        lastName,
        email,
        password,
        password_confirmation,
      });

     
      console.log(res)

  setLoggedIn(true)
    setUser( res.data.user)

    return {
      success: true,
      loggedIn: loggedIn,
  
    };
  } catch (error) {
    console.error(
      error.response?.data?.message 
    );

  } finally {
    setLoading(false);
  }
};

  const logout = async () => {
    try {
      await axios.post("api/logout");
      setUser(null);
      toast.success("Donnexion effectuée avec succès");
      setLoggedIn(false)
    return {
      success: true,
      loggedIn: loggedIn,
    user: res.data.user

    };
    } catch (error) {
      toast.error("Logout error");
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
