import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { AppointmentProvider } from "./context/AppointmentProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
        <App />
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>
);
