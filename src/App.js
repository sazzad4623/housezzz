import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routing></Routing>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
