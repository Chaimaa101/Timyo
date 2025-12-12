import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function UserDashboard() {
  const { user } = useContext(AuthContext)
  
  console.log(user)
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      hello {user?.firstName}
      </div>
  )
}

export default UserDashboard