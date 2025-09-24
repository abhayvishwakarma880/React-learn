import React, { useContext } from 'react'
import Mycontext from './Mycontext';

const About = () => {
  const user = useContext(Mycontext);
  return (
    <div>
      <h1>Welcome to About</h1>
      <p>welcome {user.name}, {user.jati}</p>
    </div>
  )
}

export default About
