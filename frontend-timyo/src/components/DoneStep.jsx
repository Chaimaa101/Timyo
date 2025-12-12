import React from "react";
import { useAppointment } from "../context/AppointmentProvider";


export const DoneStep = ( ) => {
  const { service,doctor, date, time, firstName, lastName } = useAppointment();
  return (
    <div className="text-center py-10">
      <h2 className="text-2xl font-semibold mb-4">Appointment Confirmed</h2>
      <p className="text-gray-600 mb-6">Thank you! Here is your summary:</p>

      <div className="bg-gray-50 p-6 rounded-xl text-left inline-block">
        <p>
          <strong>Service:</strong> {service}
        </p>
        <p>
          <strong>Doctor:</strong> {doctor}
        </p>
        <p>
          <strong>Date:</strong> {date}
        </p>
        <p>
          <strong>Time:</strong> {time}
        </p>
        <p>
          <strong>Name:</strong> {firstName} {lastName}
        </p>
      </div>
    </div>
  );
};
