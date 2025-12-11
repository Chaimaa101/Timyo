import React, { useState } from "react";
import { ServiceStep } from "../components/ServiceStep";
import { TimeStep } from "../components/TimeStep";
import { DetailsStep } from "../components/DetailsStep";
import { DoneStep } from "../components/DoneStep";

export default function AppointmentForm() {
  const [step, setStep] = useState(1);

  const [treatment, setTreatment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-semibold mb-6">Book Appointment</h1>

        {step === 1 && (
          <ServiceStep
            treatment={treatment}
            setTreatment={setTreatment}
            doctor={doctor}
            setDoctor={setDoctor}
            next={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <TimeStep
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            next={() => setStep(3)}
            back={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <DetailsStep
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}
            next={() => setStep(4)}
            back={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <DoneStep
            treatment={treatment}
            doctor={doctor}
            date={date}
            time={time}
            firstName={firstName}
            lastName={lastName}
          />
        )}
      </div>
    </div>
  );
}
