import React, { useContext, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Button from "./button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  }

  const commonLinks = [
    { name: "Accueil", path: "/" },
    { name: "Réserver un rendez-vous", path: "/appointmentForm" },
  ];

  const userLinks = [
    { name: "Mon espace", path: "/userPage" },
  ];

  const adminLinks = [
    { name: "Espace administrateur", path: "/adminPage" },
  ];

  let linksToShow = [...commonLinks];
  if (user?.role === "user") linksToShow = [...linksToShow, ...userLinks];
  if (user?.role === "admin") linksToShow = [...linksToShow, ...adminLinks];

  return (
    <>
      <nav className="bg-lime-200 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-lime-700">Timyo</h1>

          <ul className="hidden md:flex space-x-8 text-gray-700 font-medium flex-1 justify-center">
            {linksToShow.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-lime-700">
                {link.name}
              </Link>
            ))}
          </ul>

          <div className="hidden md:flex space-x-4">
            {user ? (
              <>
                <span className="font-semibold text-gray-700">
                  Hello {user.role === "admin" ? "Admin" : user.firstName}
                </span>
                <button
                  onClick={handleLogout}
                  className= "ml-2 bg-rose-500 hover:bg-rose-600 text-white px-3 py-1 rounded"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
               <Button name="Login" color="lime"/>
                <Button name="Register" color="teal"/>
              </>
            )}
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span className="text-3xl text-gray-700">&#9776;</span>
          </button>
        </div>

        {open && (
          <ul className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
            {linksToShow.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="block hover:text-lime-700">
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              {user ? (
                <div className="flex flex-col space-y-2">
                  <span className="font-semibold text-gray-700">
                    Hello {user.role === "admin" ? "Admin" : user.firstName}
                  </span>
                  <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 w-30 rounded"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link
                    to="/login"
                    className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 w-30 rounded font-semibold"
                  >
                    Se connecter
                  </Link>
                  <Link
                    to="/register"
                    className="bg-green-400 hover:bg-green-500 px-3 py-1 w-30 rounded font-semibold"
                  >
                    S’inscrire
                  </Link>
                </div>
              )}
            </li>
          </ul>
        )}
      </nav>

      <div className="pt-24">
        <Outlet />
      </div>
    </>
  );
}
