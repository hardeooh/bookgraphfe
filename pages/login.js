import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

const login = () => {
  const {data:session} = useSession()

  if (session) {
    return (
      <div>
        <p>
        Welcome, {session.user.email}  
        </p>
        <button onClick={() => signOut()} className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-3 rounded absolute left-72">
          Logout
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <p>Not Logged In</p>
        <button onClick={(e) => { 
          e.preventDefault()
          signIn()}}
          className="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-3 rounded absolute left-72">
          Login
        </button>
      </div>
    )
  }




}

export default login