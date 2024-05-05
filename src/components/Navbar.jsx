import React, { useContext } from 'react'
import Add from "../img/chat.png";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <img src={Add} className="logoimg" alt=""/>
      <span className="logo">Webchat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar