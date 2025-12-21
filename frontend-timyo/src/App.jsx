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
import MyAppointment from "./pages/User/MyAppointment";


import AdminRoute from "./components/ProtectPages/AdminRoute";
import UserRoute from "./components/ProtectPages/UserRoute";
import ErrorPage from "./components/ErrorPage";

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

              {/* USER PROTECTED */}
              <Route
                path="/appointmentForm"
                element={
                  <UserRoute>
                    <AppointmentForm />
                  </UserRoute>
                }
              />

              <Route
                path="/myAppointments"
                element={
                  <UserRoute>
                    <MyAppointment />
                  </UserRoute>
                }
              />

              <Route
                path="/userPage"
                element={
                  // <UserRoute>
                    <UserDashboard />
                  // </UserRoute>
                }
              />

              {/* ADMIN PROTECTED */}
              <Route
                path="/adminPage"
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              />

              <Route
                path="/listAppoint"
                element={
                  <AdminRoute>
                    <ListAppointment />
                  </AdminRoute>
                }
              />

              <Route
                path="/listUsers"
                element={
                  <AdminRoute>
                    <ListeUsers />
                  </AdminRoute>
                }
              />
              <Route path="/error" element={<ErrorPage/>} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
