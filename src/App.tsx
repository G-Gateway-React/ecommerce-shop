// import { useEffect } from "react";
// import Home from "../src/Screens/Home"
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Home />} />

             <Route path="/login" element={  <Login/>} />
         
         
        </Routes>
     

      </div>
      </BrowserRouter>
  );
}

export default App;
