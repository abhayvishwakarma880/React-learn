import { createContext, useContext } from 'react'
import './App.css'
import Mycontext from './Mycontext'
import About from './About'
import Home from './Home'
import Mystoredata from './Mystoredata'
// import Home from './Home';

// const UserContext = createContext();
// function Navbar(){
//   const user = useContext(UserContext);
//   return (
//     <>
//       <h3>Welcome , {user}</h3>
//     </>
//   )
// }
// function Dashboard(){
//   const user = useContext(UserContext);
//   return (
//     <>
//       <h3>Welcome loaded for,  {user}</h3>
//     </>
//   )
// }
function App() {

  // const value = {
  //   name:"abhay",
  //   jati:"Lohar"
  // }
  const value = ["Abhay", " Lohar"]
  const abhay = "digiCoders"
  return (
    <>    
    <Mycontext.Provider value={value}>
      <Mystoredata.Provider value={abhay}>
      <Home />
      <About />
      </Mystoredata.Provider>
    </Mycontext.Provider>
    
    
    </>

  )
}

export default App
