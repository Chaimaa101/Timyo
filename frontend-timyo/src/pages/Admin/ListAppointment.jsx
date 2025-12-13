import React, { useContext, useState } from 'react'
import { AppointmentContext } from '../../context/AppointmentProvider';

function ListAppointment() {
  
const { appointments, loading, approveAppointment, rejectAppointment } =
  useContext(AppointmentContext);

  console.log(appointments)
  const reject = (id) => {
  rejectAppointment(id);
  };

  const approve = (id) => {
    approveAppointment(id);
   };
  

return (
    <>
   <div className="max-w-7xl mx-auto px-4 mt-10">
    
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">

        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Appointments List</h2>
          <span className="text-sm text-gray-500">
            Total: {appointments.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">User Name</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    Loading appointments...
                  </td>
                </tr>
              )}

              {!loading && appointments.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    No appointments found
                  </td>
                </tr>
              )}

              {!loading &&
                appointments.map((u) => (
                  <tr
                    key={u.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {u.user.firstName} {u.user.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {u.date}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {u.time}
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button
                        onClick={() => reject(u.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
                      >
                        🗑 Delete
                      </button>

                      <button
                        onClick={() => approve(u.id)}

                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 transition"
                      >
                        ✏ Update
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    </>
  )
}
export default ListAppointment