import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Main from "./pages/Main";
import Admin from "./pages/Admin ";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="admin" element={<Admin/>} />
    </Routes>

    </>
  )
}

export default App;
