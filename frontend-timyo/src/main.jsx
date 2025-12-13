import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { AppointmentProvider } from "./context/AppointmentProvider.jsx";
import { UserProvider } from "./context/UserProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>
);
