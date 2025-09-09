import React, { useEffect, useState } from "react";

export default function Timer() {
  const [timer, setTimer] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
    // const minInt = setInterval(()=>{
    //   setMin(1)
    // },60000)
    // if (timer == 5){
    //   clearInterval(interval);
    //   // setMin((minn)=>minn+1)
    // }
    if (timer == 60) {
      setTimer(0);
      setMin(min + 1);
    }
    if( min == 60){ 
      setMin(0)
      setHour(hour + 1);
    }
    // return () =>clearTimeout(interval);
  });
  return (
    <div>
      <h1>
        Timer is :
        {hour}
        <span>
          {" "}
          <sub style={{ fontSize: "20px", fontFamily: "forte", color: "red" }}>
            Hour
          </sub> 
        </span>
        {min}{" "}
        <span>
          {" "}
          <sub style={{ fontSize: "20px", fontFamily: "forte", color: "red" }}>
            Minuts
          </sub>
        </span>{" "}
        : {timer}{" "}
        <span>
          {" "}
          <sub style={{ fontSize: "20px", fontFamily: "forte", color: "red" }}>
            Seconds
          </sub>
        </span>{" "}
      </h1>
    </div>
  );
}
