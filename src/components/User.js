import React from 'react'
import Avatar from 'react-avatar'
export default function User({username}) {
  return (
    <div className='user'>
        <Avatar name={username} size={45} round="10px"/>
        <span className='userName'>{username}</span>
    </div>
  )
}
