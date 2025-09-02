// Component and props
import './App.css'
import Header from './website/Header';
import Home from './website/Home';
// import About from './website/About';
// import Props from './Props';
// import  Hero  from './website/Hero';
// import  About  from './website/About';
// import Service from './website/Service';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Service from './website/Service';
import About from './website/About';
import Task1 from './task/Task1';
import Tsign from './task/Tsign';

// Creating a component (Function )
// function Welcome(props){
//   return (
//     <div>
//       <h2>Hello, {props.nam} </h2>
//       {/* <p>Welcome to react leraning journey</p> */}
//     </div>
//   );
// }

// function Hellow(abhay){
//   return (
//     <div>
//       <h1>Hellow, {abhay.coder}</h1>
//       <p>This is coder area</p>
//       <p>hellow World</p>
//     </div>
//   )
// }
function App() {
  return (
    <div>
      {/* <h1 className="h1">Components and props </h1> <hr /> */}
      {/* reusing components with different props */}
      {/* <center> */}
      {/* <Welcome nam="Abhay" /> <hr />
      <Welcome nam="Ajay" />
      <hr />
      <Props name="Abhay" role="Developer" />
      <hr /> */}
      {/* <Header />
      <Hero />
      <Service /> */}
      {/* </center> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='header' element={<Header />} />
          {/* <Route path="header" element={<Header />} />
          <Route path="hero" element={<Hero />} /> */}
          <Route path="service" element={<Service />} />
          <Route path="about" element={<About />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="tsign" element={<Tsign />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App

// Key Points 
// 1. Components => A function that returns JSX
// 2. Props => way to pass data into components(props.name)
// 3. Components are reusable
