import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import { AppointmentProvider } from "./context/AppointmentProvider.jsx";
import { UserProvider } from "./context/UserProvider.jsx";
import FormProvider from "./context/FormProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <AppointmentProvider>
      <UserProvider>
      <FormProvider>
        <App />
      </FormProvider>
      </UserProvider>
      </AppointmentProvider>
    </AuthProvider>
  </StrictMode>
);
