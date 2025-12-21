import { createContext, use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../services/axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Echec du chargement des utilisateurs");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (id) => {
    try {
      await axios.put(`api/users/${id}`);
      toast.success(" Utilisateur mis à jour avec succès");
    } catch (error) {
      console.error("Echec de la mise à jour de l'utilisateur",error);
    }
  };
  const deleteUser = async (id) => {
    try {
      await axios.delete(`api/users/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("Utilisateur supprimé avec succès");
    } catch (error) {
      console.error("Echec de la suppression de l'utilisateur". error);
    }
  };

  // useEffect(() => {   
  //   getUsers();
  // }, []); 


  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
