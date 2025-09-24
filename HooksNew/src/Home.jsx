import React, { useContext } from 'react'
import Mycontext from './Mycontext';
import Mystoredata from './Mystoredata';

const Home = () => {
  const user = useContext(Mycontext);
  const user1 = useContext(Mystoredata)
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <p>welcome {user[0]}, {user[1]}</p>
      <p>{user1}</p>
    </div>
  )
}

export default Home
