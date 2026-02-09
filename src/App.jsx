import { useState } from "react";
import './styles/App.css'
import Header from "./components/Header"
import PersonalInfo from "./components/form-section/PersonalInfo";
import EducationInfo from "./components/form-section/EducationInfo"
import MyDocument from "./components/pdf-section/Document"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Tan Jun Jie",
    title: "Data Analyst Undergraduate",
    email: "tanjj01@gmail.com",
    contactNumber: "8744 0293",
    linkedIn: "linkedin.com/in/tanjj123456",
    addUrl: "",
  })

  const [educationItems, setEducationItems] = useState([
    {
        institutionName: "National University of Singapore (NUS)",
        course: "Bachelor of Computing in Computer Science",
        graduationDate: "2027-05",
        description: "Specialing in data analysis, parallel computing",
    }
  ]);

  return (
    <div id="content">
      <div id="header-container">
          <Header />
      </div>
      <div id="side-bar-container">
        <PersonalInfo 
            personalInfo={personalInfo}
            setPersonalInfo={setPersonalInfo}
        />

        <EducationInfo 
            educationItems={educationItems}
            setEducationItems={setEducationItems}
        />
      </div>
      <div id="document-container">
        <MyDocument 
          personalInfo={personalInfo}
          educationItems={educationItems}
        />
      </div>
    </div>
  )
}

export default App