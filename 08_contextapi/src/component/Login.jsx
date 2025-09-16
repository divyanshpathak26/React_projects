import React, { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div className="flex flex-col items-center gap-3 p-4">
            <h2 className="text-xl font-bold">Login</h2>
            
            <input 
                type="text" 
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                placeholder="Username"
                className="border p-2 rounded w-64"
            />

            <input 
                type="password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="border p-2 rounded w-64"
            />

            <button 
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Submit
            </button>
        </div>
    )
}

export default Login
