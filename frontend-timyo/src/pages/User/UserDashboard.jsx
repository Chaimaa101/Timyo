import { Link } from 'react-router-dom';

function UserDashboard() {

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Mon espace</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        <Link
          to="/myAppointments"
          className="bg-white shadow rounded p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Mes Rendez-vous
          </h2>
          
        </Link>

        <Link
          to="/appointmentForm"
          className="bg-white shadow rounded p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold mb-2">
            Prendre rendez-vous
          </h2>
          
        </Link>
      </div>
    </div>
  );
}


export default UserDashboard