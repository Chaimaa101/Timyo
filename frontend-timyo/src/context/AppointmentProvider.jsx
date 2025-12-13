import { createContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/axios";

export const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");


  const getAppointments = async () => {
    try {
      setLoading(true);
      const res = await api.get("/appointments");
      setAppointments(res);
    } catch (error) {
      toast.error("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  const addAppointment = async () => {
    try {
      await api.post("/appointments", {
        service,
        doctor,
        date,
        time,
        phone,
      });
      toast.success("Appointment created successfully");
      getAppointments();
    } catch (error) {
      toast.error("Failed to create appointment");
    }
  };

  const approveAppointment = async (id) => {
    try {
      await api.put(`/appointments/${id}/approve`);
      toast.success("Appointment approved");
      getAppointments();
    } catch (error) {
      toast.error("Failed to approve appointment");
    }
  };

  const rejectAppointment = async (id) => {
    try {
      await api.put(`/appointments/${id}/reject`);
      toast.success("Appointment rejected");
      getAppointments();
    } catch (error) {
      toast.error("Failed to reject appointment");
    }
  };

  
  const deleteAppointment = async (id) => {
    try {
      await api.delete(`/appointments/${id}`);
      toast.success("Appointment deleted");
      setAppointments((prev) =>
        prev.filter((a) => a.id !== id)
      );
    } catch (error) {
      toast.error("Failed to delete appointment");
    }
  };

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        loading,

        service,
        setService,
        doctor,
        setDoctor,
        date,
        setDate,
        time,
        setTime,
        phone,
        setPhone,

        addAppointment,
        approveAppointment,
        rejectAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}
