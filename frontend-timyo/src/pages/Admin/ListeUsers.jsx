import React, { use, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserProvider.jsx";

function ListeUsers() {
  const { users, loading, deleteUser ,updateUser} = useContext(UserContext);
  const [role,setRole]=useState('');

  
  const handleUpdate = (id) => {
    updateUser(id, { role });
  };

  return (
    <>
    <div className="container max-w-7xl mx-auto px-4 mt-10">
  
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
    
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Users List</h2>
          <span className="text-sm text-gray-500">
            Total: {users.length}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-3">First Name</th>
                <th className="px-6 py-3">Last Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-500">
                    Loading users...
                  </td>
                </tr>
              )}

              {!loading && users.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-6 text-gray-400">
                    aucun utiliisateur trouvé
                  </td>
                </tr>
              )}

              {!loading &&
                users.map((u) => (
                  <tr
                    key={u.id}
                    className=" hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-800">
                      {u.firstName}
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      {u.lastName}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {u.email}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      <select name="role" id="role" onChange={(e)=>setRole(e.target.value)} className="p-2 border rounded-lg">
                        <option value={u.role} selected>{u.role}</option>
                        <option value="user" >user</option>
                        <option value="admin">admin</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-center space-x-2">
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-black bg-red-300 rounded-lg hover:bg-red-600 transition"
                      >
                        Delete
                      </button>

                      <button
                      onClick={() => handleUpdate(u.id)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-black bg-cyan-300 rounded-lg hover:bg-cyan-600 transition"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
}

export default ListeUsers;
