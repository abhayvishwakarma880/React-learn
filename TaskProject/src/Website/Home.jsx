import React from "react";
import Login from "./Login";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home(){
  return (
    <div>
      <Login /> <br />
      {/* <Link to="signup">signup</Link> */}
      <Link to="service"><Button variant="outline-primary">Service</Button></Link> <br />
      <Link to="alert"><Button variant="outline-primary">alert</Button></Link>
    </div>
  );
};
export default Home;