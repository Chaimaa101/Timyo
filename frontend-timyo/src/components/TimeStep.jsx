import React from "react";
import { useAppointment } from "../context/AppointmentProvider";


export const TimeStep = ({ back, next }) => {
   const { date, setDate, time, setTime } = useAppointment();

  return (
    <div>
      <p className="text-lg font-medium mb-4">Select date and time:</p>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Time</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
        />
      </div>

      <div className="flex justify-between">
        <button
          onClick={back}
          className="px-8 py-3 border border-gray-400 rounded-full text-gray-600 hover:bg-gray-100"
        >
          Back
        </button>
        <button
          onClick={next}
          className="px-10 py-3 bg-lime-800 text-white rounded-full hover:bg-lime-900"
        >
          Next
        </button>
      </div>
    </div>
  );
};
