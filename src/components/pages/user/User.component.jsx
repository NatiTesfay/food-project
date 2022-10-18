import React, { useState } from 'react'
import './user.css';
import axios from 'axios';

const User = () => {
  const[profileName , setName] = useState('');
  const[profileDate , setDate] = useState('');
  const[profileEmail , setEmail] = useState('');
  const[profileImg , setImg] = useState('');
  const[profilePassword , setPassword] = ('');
  return (
    <div>
      user
    </div>

  )
}

export default User;