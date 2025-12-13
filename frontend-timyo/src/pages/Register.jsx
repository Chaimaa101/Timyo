import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

   
      const result = await register(firstName, lastName, email, password, password_confirmation);

    if (!result.success) return;

  toast.success("Registration successful!");

  if (result.user.role === "admin") {
    navigate("/adminPage");
  } else {
    navigate("/userPage");
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create Account
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium">First Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Last Name</label>
            <input
              type="text"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

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
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password Confirmation</label>
          <input
            type="password"
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-lime-600"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-lime-700 text-white p-3 rounded-xl hover:bg-lime-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}
