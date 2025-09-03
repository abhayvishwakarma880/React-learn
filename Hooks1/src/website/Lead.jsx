import React, { useState } from "react";

function Lead(){
  const [user, setUser] = useState({name:'',age:0});
  return (
    <>
      <form>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name:e.target.value })}
          placeholder="Enter Your Name"
        />
        <input
          type="number"
          value={user.age}
          onChange={(e) => setUser({ ...user, age:e.target.value })}
          placeholder="Enter Your age"
        />
        <h1>Name : {user.name} </h1>
        <h1>Age : {user.age} </h1>
      </form>
    </>
  );
}
export default Lead;