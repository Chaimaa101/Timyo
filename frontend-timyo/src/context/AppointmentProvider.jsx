import { createContext, use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "../services/axios";

export const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [userAppointments, setUserAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const getAppointments = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/appointments");
      setAppointments(res.data);
    } catch (error) {
      console.error("Echec du chargement des rendez-vous");
    } finally {
      setLoading(false);
    }
  };

  const getUserAppointments = async () => {
    try {
      setLoading(true);
      const res = await axios.get("api/Myappointments");
      setUserAppointments(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const addAppointment = async (appointmentData) => {
    try {
      const res = await axios.post("api/appointments", appointmentData);

      setErrors({});
      console.log(res.data);
      getUserAppointments();
      return { success: true };
    } catch (error) {
      setErrors(error.response?.data?.errors || {});
      console.error(error);
    }
  };

  const approveAppointment = async (id) => {
    try {
      await axios.put(`api/appointments/${id}/approve`);
      toast.success("Rendez-vous approuvé");
      getAppointments();

      return { success: true };
    } catch (error) {
      setErrors(error.response.data.errors);
      console.error(error);
    }
  };

  const UpdateAppointment = async (id) => {
    try {
      await axios.put(`api/appointments/${id}`);
      toast.success("Rendez-vous modifié");
      getAppointments();
      return { success: true };
    } catch (error) {
      setErrors(error.response.data.errors);
      console.error(error);
    }
  };

  const rejectAppointment = async (id) => {
    try {
      await axios.put(`api/appointments/${id}/reject`, { statut: "rejected" });
      toast.success("Rendez-vous rejeté");
      getAppointments();
      return { success: true };
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await axios.delete(`api/appointments/${id}`);
      toast.success("Rendez-vous supprimé");
      getUserAppointments();
      return { success: true };
    } catch (error) {
      setErrors(error.response.data.errors);
      console.error(error);
    }
  };
  // useEffect(() => {
  //   getAppointments();
  //   getUserAppointments();
  // }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        userAppointments,
        loading,
        errors,
        getAppointments,
        getUserAppointments,

        addAppointment,
        approveAppointment,
        rejectAppointment,
        deleteAppointment,
        UpdateAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
