import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
import { div } from 'framer-motion/client'

function Profile() {
    const{user}=useContext(UserContext)
  if(!user) return 
  <div>please login</div>

  return <div>welcm{user.username}</div>
}

export default Profile