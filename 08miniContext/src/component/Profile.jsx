import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const{user} = useContext(UserContext)
    if(!user) return <div>Please Log in</div>
    return (
    <div>Hello {user.username} </div>
  )
}

export default Profile