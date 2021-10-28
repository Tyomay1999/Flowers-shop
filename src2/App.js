import React from "react";
import "./config.css";
import "./app.css";
import "./fontawesome/css/all.css"
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Menu from "./components/Menu/Menu";
function App() {
  return (
    <div className="main light">
      <Header/>
      <Main/>
      <Menu/>
    </div>
  )
}

export default App;
