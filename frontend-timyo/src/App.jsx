import AppointmentForm from "./pages/AppointmentForm";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListAppointment from "./pages/Admin/ListAppointment";
import ListeUsers from "./pages/Admin/ListeUsers";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserDashboard from "./pages/User/UserDashboard";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/appointmentForm" element={<AppointmentForm />} />
            <Route path="/myAppointments" element={<AppointmentForm />} />
            <Route path="/amdinPage" element={<AdminDashboard />} />
            <Route path="/userPage" element={<UserDashboard />} />
            <Route path="/liatAppoint" element={<ListAppointment />} />
            <Route path="/listUsers" element={<ListeUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
