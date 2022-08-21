// import { useEffect } from "react";
// import Home from "../src/Screens/Home"
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import Login from "./Screens/Login/Login";
import { Toaster } from 'react-hot-toast';

import Sign from "./Screens/Sign/Sign";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
         <Toaster/>
        <Routes>
         
          <Route path="/" element={ <Home />} />

             <Route path="/login" element={  <Login/>} />
         
                      <Route path="/sign" element={  <Sign/>} />

        </Routes>
     

      </div>
      </BrowserRouter>
  );
}

export default App;
