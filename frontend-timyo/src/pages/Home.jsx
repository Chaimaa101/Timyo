import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
 
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

      
        <div className="flex justify-center">
          <img 
            src="src/assets/pp.jpg" 
            alt="Appointment illustration"
            className="w-[90%] md:w-[80%]"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-slate-700">
            Appointment <span className="text-lime-500">Booking</span>
          </h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Book appointments easily with our modern online scheduling
            system. Select your preferred date and time, avoid waiting,
            and manage your reservations with just one click.
          </p>

          <Link
            to="/appointmentForm"
            className="mt-6 inline-block bg-lime-400 text-lime-900 font-semibold px-6 py-3 rounded-lg hover:bg-lime-600 transition"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home