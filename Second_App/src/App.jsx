// Component and props
import './App.css'
import Props from './Props';

// Creating a component (Function )
function Welcome(props){
  return (
    <div>
      <h2>Hello, {props.nam} </h2>
      {/* <p>Welcome to react leraning journey</p> */}
    </div>
  );
}

function Hellow(abhay){
  return (
    <div>
      <h1>Hellow, {abhay.coder}</h1>
      <p>This is coder area</p>
      <p>heloow</p>
    </div>
  )
}
function App() {
  return (
    <div>
      {/* <h1 className="h1">Components and props </h1> <hr /> */}
      {/* reusing components with different props */}
      <center>
      <Welcome nam="Abhay" /> <hr />
      <Welcome nam="Ajay" />
      <hr />
      <Props name="Abhay" role="Developer" />
      <hr />
      </center>
    </div>
  );
}

export default App

// Key Points 
// 1. Components => A function that returns JSX
// 2. Props => way to pass data into components(props.name)
// 3. Components are reusable
