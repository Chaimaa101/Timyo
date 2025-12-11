import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <nav className="bg-lime-200 shadow-md fixed top-0 left-0 w-full z-50 mb-30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
    
        <h1 className="text-2xl font-bold text-lime-700">Timyo</h1>

        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-lime-700">Accueil</Link>
          <Link to="/appointmentForm" className="hover:text-lime-700">RDV</Link>
          <Link to="/userPage" className="hover:text-lime-700">User</Link>
          <Link to="/adminPage" className="hover:text-lime-700">Dashboard</Link>
          <Link to="/login" className="hover:text-lime-700">Login</Link>
          <Link to="/register" className="hover:text-lime-700">register</Link>
        </ul>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="text-3xl text-gray-700">&#9776;</span>
        </button>
      </div>

      {open && (
        <ul className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <li><a href="/" className="block hover:text-lime-700">Home</a></li>
          <li><a href="/appointmentForm" className="block hover:text-lime-700">RDV</a></li>
          <li><a href="/userPage" className="block hover:text-lime-700">User</a></li>
          <li><a href="/amdinPage" className="block hover:text-lime-700">Dashboard</a></li>
        </ul>
      )}
    </nav>
<Outlet />

    <footer>
      <div className="bg-lime-200 text-lime-700 text-center p-4 mt-12">
        &copy; {new Date().getFullYear()} Timyo. All rights reserved.
      </div>
    </footer>
    </>
  );
}
