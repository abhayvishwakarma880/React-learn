import React, { useEffect, useState } from 'react'

export default function Demo() {
  let arj = "->"
  const [data, setData] = useState([]);
  useEffect(()=>{
    const fetchData = async () =>{
      try{
        // const responce = await fetch('http://127.0.0.1:8000/stuinfo/');
        const responce = await fetch('http://127.0.0.1:8000/studentapi/');
        const jsonData = await responce.json();
        console.log(jsonData);
        setData(jsonData);
      }
      catch(error){
        console.log("error Fetching Data", status=404);
      }
    };
    fetchData();
  },[])
  return (
    <div>
      <h1>Fetched data from API</h1>
      {data ? (
        <ul>
          {data.map(item=>(
            <>
            <li>{item.name} {arj} <span> roll number : {item.roll}</span></li>
            
            </>
          ))}
        </ul>
      ) : (
        <p>No data here</p>
      )}
    </div>
  );
}
