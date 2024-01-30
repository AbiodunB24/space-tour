import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import Technology from "./pages/Technology"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Navbar from "./components/Navbar"


function App() {

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/technology" element={<Technology/>} />
      <Route path="/crew" element={<Crew/>} />
      <Route path="/Destination" element={<Destination/>} />
    </Routes>
   </div>
  )
}

export default App
