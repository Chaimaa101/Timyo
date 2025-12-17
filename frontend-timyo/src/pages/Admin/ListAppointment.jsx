import React, { useContext } from "react";
import { AppointmentContext } from "../../context/AppointmentProvider";

function ListAppointment() {
  const { appointments, loading, approveAppointment, rejectAppointment } =
    useContext(AppointmentContext);

  const reject = (id) => {
    rejectAppointment(id);

     if (res?.success) {
      navigate("/myAppointments");
      toast.success("Rendez-vous approuvé avec succès");
      
     }
  };

  const approve = (id) => {
    approveAppointment(id);

     if (res?.success) {
      navigate("/myAppointments");
      toast.success("Rendez-vous rejecté avec succès");
     }
  };

  
  return (
    <>
      <div className="container max-w-7xl mx-auto px-4 mt-10">
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              Appointments List
            </h2>
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
                      Aucun rendez-vous trouvé
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
                      <td className="px-6 py-4 text-gray-700">{u.date}</td>
                      <td className="px-6 py-4 text-gray-600">{u.time}</td>
                      <td className="px-6 py-4 text-center space-x-2">
                        {u.statut === "pending" && (
                          <>
                            <button
                              onClick={() => approve(u.id)}
                              className="px-3 py-1.5 text-xs bg-green-300 rounded-lg hover:bg-green-600"
                            >
                              Approuver
                            </button>

                            <button
                              onClick={() => reject(u.id)}
                              className="px-3 py-1.5 text-xs bg-red-300 rounded-lg hover:bg-red-600"
                            >
                              Rejeter
                            </button>
                          </>
                        )}

                        {u.statut === "approved" && (
                          <span className="px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                            Approuvé
                          </span>
                        )}

                        {u.statut === "rejected" && (
                          <span className="px-3 py-1 text-xs font-semibold text-red-700 bg-red-100 rounded-full">
                            Rejeté
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListAppointment;
