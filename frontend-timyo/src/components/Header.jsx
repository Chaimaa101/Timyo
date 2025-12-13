import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  // Define links based on role
  const commonLinks = [
    { name: "Accueil", path: "/" },
    { name: "RDV", path: "/appointmentForm" },
  ];

  const userLinks = [
    { name: "My Dashboard", path: "/userPage" },
  ];

  const adminLinks = [
    { name: "Admin Dashboard", path: "/adminPage" },
  ];

  let linksToShow = [...commonLinks];
  if (user?.role === "user") linksToShow = [...linksToShow, ...userLinks];
  if (user?.role === "admin") linksToShow = [...linksToShow, ...adminLinks];

  return (
    <>
      <nav className="bg-lime-200 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-lime-700">Timyo</h1>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium flex-1 justify-center">
            {linksToShow.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-lime-700">
                {link.name}
              </Link>
            ))}
          </ul>

          {/* Right section */}
          <div className="hidden md:flex space-x-4">
            {user ? (
              <>
                <span className="font-semibold text-gray-700">
                  Hello {user.role === "admin" ? "Admin" : user.firstName}
                </span>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-green-400 hover:bg-green-500 px-3 py-1 rounded font-semibold"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span className="text-3xl text-gray-700">&#9776;</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
            {linksToShow.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="block hover:text-lime-700">
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Mobile right section */}
            <li>
              {user ? (
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-700">
                    Hello {user.role === "admin" ? "Admin" : user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/login"
                    className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded font-semibold"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-400 hover:bg-green-500 px-3 py-1 rounded font-semibold"
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        )}
      </nav>

      <div className="pt-24">
        {/* Outlet for nested routes */}
        <Outlet />
      </div>
    </>
  );
}
