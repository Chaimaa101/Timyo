import React, { useContext, useState } from "react";
import { AppointmentContext } from "../context/AppointmentProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const TimeStep = () => {
  const { addAppointment, errors } = useContext(AppointmentContext);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [statut] = useState("pending"); 
  const navigate = useNavigate(); 

const handleAddAppointment = async (e) => {
  e.preventDefault();

  try {
    const res = await addAppointment({ date, time, statut });

    if (res?.success) {
      navigate("/myAppointments");
      toast.success("Rendez-vous ajouté avec succès");
      setDate("");
      setTime("");
    }
  } catch (error) {
    toast.error("Une erreur est survenue");
  }
};

  return (
    <form onSubmit={handleAddAppointment} className="space-y-6">
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Choisir une date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
          required
        />
        {errors?.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Choisir une heure</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
          required
        />
      </div>
        {errors?.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-10 py-3 bg-lime-800 text-white rounded-full hover:bg-lime-900 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!date || !time} 
        >
          Réserver
        </button>
      </div>
    </form>
  );
};