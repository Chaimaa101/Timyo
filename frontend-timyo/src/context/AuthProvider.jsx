import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api, { getCsrfCookie } from "../services/axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {
      await getCsrfCookie();

      const res = await api.get("/user");

      setUser(res.data.user);
   
    } catch (error) {
       if (error.response?.status === 401) {
        console.log("User is not authenticated (401)");
      }
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

 const login = async (email, password) => {
  try {
    setLoading(true);

    await getCsrfCookie();
    await api.post("/login", { email, password });

    checkAuth();

    return {
      success: true,
      user: res.data.user,
    };
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Invalid credentials"
    );
    return {
      success: false,
      error: error.response?.data,
    };
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
      const res = await api.post(`/register`, {
        firstName,
        lastName,
        email,
        password,
        password_confirmation,
      });

     
      await checkAuth();
    return {
      success: true,
      user: res.data.user,
    };
  } catch (error) {
    toast.error(
      error.response?.data?.message 
    );
    return {
      success: false,
      error: error.response?.data,
    };
  } finally {
    setLoading(false);
  }
};

  const logout = async () => {
    try {
      await api.post("/logout");
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout error");
    }
  };
     useEffect(() => {
        checkAuth();
      }, []);
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        checkAuth,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
