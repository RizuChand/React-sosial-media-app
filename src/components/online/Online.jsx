import React from 'react'
import './online.css'

export default function Online({user}) {
  return (
    
        <li className="rightbarFriend">
            <div className="profileContainer">
                <img className="imgContainer" src={user.profilePicture} alt="" />
                <span className="online"></span>
            </div>
                <span className="username">{user.username}</span>
    
        </li>
  
  )
}
