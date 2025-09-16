import { useState } from 'react'

import './App.css'
import UserContextprovider from './Context/UserContextprovider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextprovider>
     <h1 className='bg-orange-700 p-4'>hello</h1>
     <Login/>
     <Profile/>
    </UserContextprovider>
  )
}

export default App
