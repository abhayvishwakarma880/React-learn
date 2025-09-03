import React, { useState } from "react";

function User() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Your Name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email"
        />
      </form>
      <p>name : {name}</p>
      <p>email : {email}</p>
    </>
  );
}
export default User;
