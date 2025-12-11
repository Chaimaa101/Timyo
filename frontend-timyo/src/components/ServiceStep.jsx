import React from "react";

export const ServiceStep = ({
  treatment,
  setTreatment,
  doctor,
  setDoctor,
  next,
}) => {
  return (
    <div>
      <p className="text-lg font-medium mb-4">Please select service:</p>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Treatment</label>
        <select
          value={treatment}
          onChange={(e) => setTreatment(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
        >
          <option value="">Select treatment</option>
          <option value="Dental Cleaning">Dental Cleaning</option>
          <option value="Whitening">Teeth Whitening</option>
          <option value="Checkup">General Checkup</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Doctor</label>
        <select
          value={doctor}
          onChange={(e) => setDoctor(e.target.value)}
          className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-800"
        >
          <option value="">Select doctor</option>
          <option value="Ahmad Dimas">Ahmad Dimas, Sp.BM, M.Kes</option>
          <option value="John Doe">Dr. John Doe</option>
          <option value="Sarah Smith">Dr. Sarah Smith</option>
        </select>
      </div>

      <div className="flex justify-end">
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
