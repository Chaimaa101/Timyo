import React from "react";
import { useAppointment } from "../context/AppointmentProvider";

export const DetailsStep = ({ back, next }) => {
   const { firstName, setFirstName, lastName, setLastName, email, setEmail } =
    useAppointment();
  return (
    <div>
      <p className="text-lg font-medium mb-4">Enter your details:</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 text-sm font-medium">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
