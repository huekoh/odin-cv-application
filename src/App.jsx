import { useState } from "react";
import './styles/App.css'
import Header from "./components/Header"
import PersonalInfo from "./components/form-section/PersonalInfo";

function App() {
  return (
    <>
      <div id="header-container">
          <Header />
      </div>
      <div id="side-bar-container">
        <PersonalInfo />
      </div>
    </>
  )
}

export default App