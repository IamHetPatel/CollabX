import React, { useState } from 'react'
import User from "../components/User"
import Editor from "../components/Editor"

export default function EditorPage() {
    const [users,setUsers] = useState([
        {socketId:1,username: 'Het'},
        {socketId:2,username: 'Aayush'},
        {socketId:3,username: 'Krish'},
    ]);
  return (
    <div className='mainWrapper'>
        <div className='sidebar'>
            <div className='sideInner'>

                <div className='logo'>
                    <img className='homePageLogo' src="/logo.png" alt="logo"/>
                </div>
                <h3>Connected Users:</h3>
                <div className='usersList'>
                    {
                        users.map((user) =>(
                            <User key={user.socketId} username={user.username}/>
                        ))
                    }
                </div>
            </div>
            <button className='btn copyBtn'>Copy Room ID</button>
            <button className='btn leaveBtn'>Leave Room</button>
        </div>
        <div className='mainScreen'>
            <Editor/>
        </div>
    </div>
  )
}
