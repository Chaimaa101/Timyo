import React, { useState } from 'react'

function MyAppointment() {
 
  const [appointments, setAppointments] = useState([
    { id: 1, date: "2025-01-10", status: "Confirmed" },
    { id: 2, date: "2025-01-15", status: "Pending" },
  ]);
 return (
   <>
    <div className="container mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">My Appointments</h2>

      <table className="w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Date</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((a) => (
            <tr key={a.id}>
              <td className="border p-2">{a.date}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-sm font-semibold
                    ${
                      a.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                >
                  {a.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

   </>
  )
}

export default MyAppointment