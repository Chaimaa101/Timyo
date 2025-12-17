import { createContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [formPopup, setFormPopup] = useState(false);
  const [action, setAction] = useState(null);
  const [appointmentId, setAppointmentId] = useState(null);

  const handleFormPopup = (actionType, id = null) => {
    setFormPopup(true);
    setAction(actionType);
    setAppointmentId(id);
  };

  const closePopup = () => {
    setFormPopup(false);
    setAction(null);
    setAppointmentId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "update") {
      console.log("Update appointment ID:", appointmentId);
      // call updateAppointment here
    }

    closePopup();
  };

  return (
    <>
      {formPopup && (
        <form
          onSubmit={handleSubmit}
          className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm"
        >
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md w-[300px]">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <h1 className="font-semibold">Modifier rendez-vous</h1>
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={closePopup}
              />
            </div>

            {/* Body */}
            <div className="mt-4">
              <input
                type="date"
                name="date"
                className="w-full rounded-full border px-2 py-1 mb-4"
              />
              <input
                type="time"
                name="time"
                className="w-full rounded-full border px-2 py-1 mb-4"
              />

              <div className="flex justify-center">
                <button className="bg-cyan-500 text-white py-1 px-4 rounded-full">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      <FormContext.Provider
        value={{
          formPopup,
          handleFormPopup,
          closePopup,
          appointmentId,
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
}
