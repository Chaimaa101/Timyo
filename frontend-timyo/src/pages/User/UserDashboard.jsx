import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Link } from 'react-router-dom';

function UserDashboard() {
  const { user } = useContext(AuthContext)
  
  console.log(user)

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <Link
          to="/myAppointments"
          className="bg-white shadow rounded p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            My Appointments
          </h2>
          
        </Link>

        <Link
          to="/appointmentForm"
          className="bg-white shadow rounded p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Add Appointment
          </h2>
          
        </Link>
      </div>
    </div>
  );
}


export default UserDashboard