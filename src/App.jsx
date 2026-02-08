import { useState } from "react";
import './styles/App.css'
import Header from "./components/Header"
import PersonalInfo from "./components/form-section/PersonalInfo";
import EducationInfo from "./components/form-section/EducationInfo"
import MyDocument from "./components/pdf-section/Document"

function App() {
  const [educationItems, setEducationItems] = useState([
    {
        institutionName: "National University of Singapore",
        course: "Computer Science",
        graduationDate: "May 2027",
        description: "Specialing in software engineering, parallel computing",
    }
  ]);

  return (
    <div id="content">
      <div id="header-container">
          <Header />
      </div>
      <div id="side-bar-container">
        <PersonalInfo />

        <EducationInfo 
            educationItems={educationItems}
            setEducationItems={setEducationItems}
        />
      </div>
      <div id="document-container">
        <MyDocument />
      </div>
    </div>
  )
}

export default App