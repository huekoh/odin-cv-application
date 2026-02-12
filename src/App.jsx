import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/form-section/PersonalInfo";
import EducationInfo from "./components/form-section/EducationInfo";
import ExperienceInfo from "./components/form-section/ExperienceInfo";
import ProjectInfo from "./components/form-section/ProjectInfo";
import MyDocument from "./components/pdf-section/Document";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Tan Jun Jie",
    title: "Data Analyst Undergraduate",
    email: "tanjj01@gmail.com",
    contactNumber: "8744 0293",
    linkedIn: "linkedin.com/in/tanjj123456",
    addUrl: "",
  });

  const [educationItems, setEducationItems] = useState([
    {
      institutionName: "National University of Singapore (NUS)",
      course: "Bachelor of Computing in Computer Science",
      graduationDate: "2027-05",
      description: "Specialing in data analysis, parallel computing",
    },
  ]);

  const [experienceItems, setExperienceItems] = useState([
    {
      companyName: "Central Provident Fund Board",
      jobTitle: "Cloud Migration Intern",
      startDate: "2024-05",
      endDate: "2024-06",
      description:
        "- Developed a prototype for Microsoft Entra ID (MFA) authentication in a Java web application.\n- Reviewed and contributed to project use case documentation, ensuring clarity and completeness.",
    },
  ]);

  const [projectItems, setProjectItems] = useState([
    {
      projectName: "CV Generator Web Application",
      association: "The Odin Project Course (TOP)",
      startDate: "2026-01",
      endDate: "",
      description:
        "- Built a responsive single-page resume builder leveraging React for real-time, stateful form management across multiple sections.\n- Structured app with component-based architecture, separating concerns across Personal Info, Education, and Experience form sections with clean prop drilling for shared state.",
    },
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

        <ExperienceInfo
          experienceItems={experienceItems}
          setExperienceItems={setExperienceItems}
        />

        <ProjectInfo
          projectItems={projectItems}
          setProjectItems={setProjectItems}
        />
      </div>
      <div id="document-container">
        <MyDocument
          personalInfo={personalInfo}
          educationItems={educationItems}
          experienceItems={experienceItems}
          projectItems={projectItems}
        />
      </div>
    </div>
  );
}

export default App;
