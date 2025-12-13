import React, { useState } from "react";
import { ServiceStep } from "../components/ServiceStep";
import { TimeStep } from "../components/TimeStep";
import { DetailsStep } from "../components/DetailsStep";
import MyAppointment from "./User/MyAppointment";

export default function AppointmentForm() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-semibold mb-6">Book Appointment</h1>

        {step === 1 && (
          <ServiceStep
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <TimeStep
            next={() => setStep(3)}
            back={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <DetailsStep
            next={() => setStep(4)}
            back={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <MyAppointment
          />
        )}
      </div>
    </div>
  );
}
