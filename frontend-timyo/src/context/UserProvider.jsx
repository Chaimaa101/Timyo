import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]); // ✅ array
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (error) {
      toast.error("Failed to fetch users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

    useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        getUsers,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
