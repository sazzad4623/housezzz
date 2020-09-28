import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routing></Routing>
      <div></div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
