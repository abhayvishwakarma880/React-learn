import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./Header";
import Hero from "./Hero";
import Service from "./Service";
import About from "./About";

function Home() {
  return (
    <div>
      {/* <Router>
        <Routes> */}
          <Header />
          {/* <Hero /> */}
          <Service />
          <About />
        {/* </Routes>
      </Router> */}
    </div>
  );
}
export default Home;