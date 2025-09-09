import { useEffect, useState } from "react";

function Dashboard(){
  const [user, setUser] = useState(null);
  useEffect(()=>{
    const LoginData = JSON.parse(localStorage.getItem("LoginData"));
    if(LoginData){
      setUser(LoginData);
    }
  },[])
  return(
    <>
      <h1>Dashboard</h1>
      {user?(
        <div>
          <p><strong>Email: </strong>{user.email}</p>
          <p><strong>Password: </strong>{user.password}</p>
        </div>
      ):(
        <p>No User</p>
      )}
    </>
  )
}
export default Dashboard;