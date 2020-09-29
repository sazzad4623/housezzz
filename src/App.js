import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Routing from "./Routing";
import Chat from "./components/chat";
import "./chat.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  let [showChat, setShowChat] = useState(false);

  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };
  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>
        <Routing></Routing>

        <Footer></Footer>
        <div className="bot">
          <div style={{ display: showChat ? "" : "none" }}>
            <Chat />
          </div>
          {/* <div> {showChat ? <SimpleForm></SimpleForm> : null} </div> */}
          <div>
            {!showChat ? (
              <button className="btn btn-info" onClick={() => startChat()}>
                click to chat...{" "}
              </button>
            ) : (
              <button className="btn btn-info" onClick={() => hideChat()}>
                click to hide...{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
