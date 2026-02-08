import { useState } from "react";
import './styles/App.css'
import Header from "./components/Header"
import PersonalInfo from "./components/form-section/PersonalInfo";
import EducationInfo from "./components/form-section/EducationInfo"

function App() {
  return (
    <>
      <div id="header-container">
          <Header />
      </div>
      <div id="side-bar-container">
        <PersonalInfo />
        <EducationInfo />
      </div>
    </>
  )
}

export default App