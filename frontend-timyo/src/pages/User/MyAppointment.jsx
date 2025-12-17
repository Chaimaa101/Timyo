import React, { useContext, useEffect, useState } from "react";
import { AppointmentContext } from "../../context/AppointmentProvider";
import toast from "react-hot-toast";
import { FormContext } from "../../context/FormProvider";

function MyAppointment() {
  const { userAppointments, updateAppointment, deleteAppointment, loading } =
    useContext(AppointmentContext);

  const { handleFormPopup } = useContext(FormContext);

  const handleCancel = (id) => {
    deleteAppointment(id);

    if (res?.success) {
      navigate("/myAppointments");
      toast.success("Rendez-vous supprimé avec succès");
    }
  };

  const handleUpdate = (id) => {
    handleFormPopup("update", id);
  };

  const statusConfig = {
    approved: {
      label: "Confirmé",
      class: "bg-green-100 text-green-700",
    },
    rejected: {
      label: "Rejeté",
      class: "bg-red-100 text-red-700",
    },
    pending: {
      label: "En attente",
      class: "bg-yellow-100 text-yellow-700",
    },
  };

  return (
    <>
      <div className="container mx-auto p-6">
        <h2 className="text-xl font-bold mb-6">Mes rendez-vous</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading && (
            <div>
              <p colSpan="4" className="text-center py-6 text-gray-500">
                Chargement des rendez-vous...
              </p>
            </div>
          )}

          {!loading && userAppointments.length === 0 && (
            <div>
              <p colSpan="4" className="text-center py-6 text-gray-400">
                Aucun rendez-vous trouvé
              </p>
            </div>
          )}

          {userAppointments.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
            >
              <p className="text-gray-500 text-sm">Date</p>
              <input
                type="text"
                value={a.date}
                name="date"
                className="text-lg font-semibold"
              />

              <p className="text-gray-500 text-sm mt-2">Heure</p>
              <p className="text-md font-medium mb-4">{a.time}</p>

              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4
  ${statusConfig[a.statut]?.class}`}
              >
                {statusConfig[a.statut]?.label}
              </span>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleUpdate(a.id)}
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Modifier
                </button>

                <button
                  onClick={() => handleCancel(a.id)}
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-3 py-2 rounded-lg text-sm font-semibold transition"
                >
                  Annuler
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyAppointment;
