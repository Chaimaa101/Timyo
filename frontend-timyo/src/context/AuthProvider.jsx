import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api, { getCsrfCookie } from "../services/axios";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    try {

      const res = await api.get("/user");

      setUser(res.data);
      console.log("User authenticated:", res.data);
    } catch (error) {
      console.log("Auth check failed:", error.message);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);

      await getCsrfCookie();

      const res = await api.post(`/login`, { email, password });
      toast.success(res.data.message || "Login successful!");

      await checkAuth();
    } catch (error) {
      toast.error(
        "Login error: " +
          (error.response?.data?.message || "Invalid credentials")
      );
      return { success: false, error: error.response?.data };
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

      toast.success(res.data.message || "Registration successful!");
      await checkAuth();
    } catch (error) {
      toast.error(
        "Register error: " +
          (error.response?.data?.message || "Registration failed")
      );
      return { success: false, error: error.response?.data };
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
