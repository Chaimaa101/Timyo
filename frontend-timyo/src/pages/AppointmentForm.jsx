import React, { useState } from "react";
import { TimeStep } from "../components/TimeStep";

export default function AppointmentForm() {

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow">
        <h1 className="text-3xl font-semibold mb-6">Réserver un rendez-vous</h1>
          <TimeStep/>
      </div>
    </div>
  );
}
