import React from 'react'
import hero from '../assets/hero.png';
import git from '../assets/git.png';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "470px",
        // backgroundPosition: "right",
        backgroundPosition: `calc(100% - 100px) 100px`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
      }}
    >
      <div className="nav">
        <div className="logo">
          {" "}
          <h2 style={{ color: "#514ae8" }}>Nextly</h2>
        </div>
        <div className="navbar">
          <ul>
            <li style={{ color: "gray" }}>Product</li>
            <li style={{ color: "gray" }}>Featured</li>
            <li style={{ color: "gray" }}>Pricing</li>
            <li style={{ color: "gray" }}>Company</li>
            <li style={{ color: "gray" }}>Blog</li>
          </ul>
        </div>
        <div className="get">
          <button
            className="btn"
            style={{
              background: "#514ae8",
              padding: "10px",
              marginTop: "-5px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="hero" style={{ marginTop: "80px" }}>
        <h1
          style={{ fontSize: "40px", fontWeight: "bold", color: "#1a1a1bff" }}
        >
          Free Landing Page Templates for startups{" "}
        </h1>
        <p
          style={{
            fontSize: "17px",
            lineHeight: "1.4",
            marginTop: "15px",
            color: "gray",
            fontWeight: "500",
          }}
        >
          Nextly is a free landing page & marketing website template for
          startups and indie projects. it built with Nest.js & TalwindCSS and
          its completely open-source
        </p>
        <button
          className="btn"
          style={{
            background: "#514ae8",
            padding: "10px",
            marginTop: "15px",
            height: "45px",
          }}
        >
          Dowload for free
        </button>{" "}
        <img src="${git}" alt="" />
      </div>
    </div>
  );
}
