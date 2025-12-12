import { createContext, useContext, useState } from "react";

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [service, setService] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <AppointmentContext.Provider
      value={{
        service,
        setService,
        doctor,
        setDoctor,
        date,
        setDate,
        time,
        setTime,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  return useContext(AppointmentContext);
}
