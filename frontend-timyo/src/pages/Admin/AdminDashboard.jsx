import React from 'react'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <>
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
        <Link
          to="/listUsers"
          className="bg-white shadow hover:shadow-lg transition rounded p-6"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Users</h2>
        
        </Link>

        <Link
          to="/listAppoint"
          className="bg-white shadow hover:shadow-lg transition rounded p-6"
        >
          <h2 className="text-xl font-semibold mb-2">Manage Appointments</h2>
          
        </Link>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard