import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login ,user} = useContext(AuthContext);
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  const result = await login(email, password);

  if (result.success) {
    toast.success("Login successful!");
  }else{
    
    toast.error("error !");
  }


  if (user.role === "admin") {
    navigate("/adminPage");
  } else {
    navigate("/userPage");
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Connexion</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Mot de passe </label>
          <input
            type="password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-700 text-white p-3 rounded-xl hover:bg-lime-800"
        >
          se connecter
        </button>
      </form>
    </div>
  );
}
