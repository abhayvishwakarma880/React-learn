import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);
  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div
        className="w-lg shadow rounded-lg p-4 bg-gray-100  "
        data-aos="fade-down"
      >
        <h1 className="font-bold text-2xl text-center text-cyan-400 my-5">
          Login Here
        </h1>
        <div className="my-5">
          <input
            type="text"
            className="bg-white border rounded px-4 py-2 w-full"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="my-5">
          <input
            type="text"
            className="bg-white border rounded px-4 py-2 w-full"
            placeholder="Enter Your Email"
          />
        </div>
        <div className="my-5 ">
          <button className="bg-white border rounded px-4 py-2 w-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
