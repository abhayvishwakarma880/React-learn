import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ye zaruri hai
import img1 from '../assets/img1.jpg';

export default function Nav() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });

    // refresh AOS after component renders
    AOS.refresh();
  }, []);
  return (
    <div className="main" style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%"
      }}
      data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
      <div className="nav" data-aos="fade-right">
        <div className="logo">
          <h1 style={{ color: "#429cd8" }}>
            Byte<span style={{ color: "#2d5d50" }}>Webster</span>
          </h1>
          <span style={{ fontSize: "13px", fontFamily: "monospace" }}>
            have a web Byte
          </span>
        </div>
        <div className="navbar">
          <ul data-aos="zoom-in">
            <li>Rates</li>
            <li>About Us</li>
            <li>Resources</li>
            <li>FAQs</li>
            <li>Service</li>
            <li className="btn">
              <button>Get Started</button>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="hero"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
      >
        <h1 className="w" data-aos="fade-left">
          {" "}
          Welcome To ByteWebster
        </h1>
        <p className="p" data-aos="fade-right">
          ByteWebster is a Professional web development and coding blog website.
          Here you will find project and coding blogs made from HTML, CSS and
          JavaScript
        </p>
        <p className="p1" data-aos="fade-left">
          Our Proejct focuson creating Responisve web design and developing
          optimised Web application
        </p>
        <button
          className="btn"
          data-aos="zoom-out"
          style={{ height: "45px", width: "130px", marginTop: "20px" }}
        >
          Find Project
        </button>
      </div>
    </div>
  );
}
