import { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PersonalInfo from "./components/form-section/PersonalInfo";
import EducationInfo from "./components/form-section/EducationInfo";
import ExperienceInfo from "./components/form-section/ExperienceInfo";
import ProjectInfo from "./components/form-section/ProjectInfo";
import SkillInfo from "./components/form-section/SkillInfo";
import MyDocument from "./components/pdf-section/Document";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Tan Jun Jie",
    title: "Data Analyst Undergraduate",
    email: "tanjj01@gmail.com",
    contactNumber: "+65 8744 XXXX",
    linkedIn: "linkedin.com/in/tanjjlit",
    addUrl: "github.com/jjlit",
  });

  const [educationItems, setEducationItems] = useState([
    {
      institutionName: "National University of Singapore (NUS)",
      course: "Bachelor of Science in Data Science and Analytics",
      graduationDate: "2027-05",
      description:
        "Specialisations: Statistical Modelling, Machine Learning, Database Systems",
    },
  ]);

  const [experienceItems, setExperienceItems] = useState([
    {
      companyName: "GovTech Singapore",
      jobTitle: "Data Analyst Intern",
      startDate: "2025-05",
      endDate: "2025-08",
      description:
        "- Designed and maintained interactive dashboards in Tableau to surface key operational metrics for cross-functional teams.\n- Automated data cleaning pipelines using Python (pandas), reducing manual processing time by 40%.\n- Collaborated with product teams to define KPIs and translate business requirements into analytical reports.",
    },
    {
      companyName: "NUS Office of Campus Amenities",
      jobTitle: "Data & Operations Assistant (Part-time)",
      startDate: "2024-08",
      endDate: "2025-04",
      description:
        "- Aggregated and analysed campus facility usage data using Excel and SQL to support resource planning decisions.\n- Prepared weekly summary reports for management, highlighting trends and anomalies in occupancy data.",
    },
  ]);

  const [projectItems, setProjectItems] = useState([
    {
      projectName: "CV Generator Web Application",
      association: "The Odin Project Online Course (TOP)",
      startDate: "2026-01",
      endDate: "",
      description:
        "- Built a responsive single-page resume builder leveraging React for real-time, stateful form management across multiple sections.\n- Structured app with component-based architecture, separating concerns across Personal Info, Education, and Experience form sections with clean prop drilling for shared state.",
    },
    {
      projectName: "Singapore Housing Price Predictor",
      association: "NUS Data Science & Analytics Coursework",
      startDate: "2025-01",
      endDate: "2025-04",
      description:
        "- Engineered features from HDB resale flat transaction data and trained regression models (Linear, Random Forest, XGBoost) to predict resale prices with ~92% R² accuracy.\n- Built an interactive web dashboard using Streamlit to allow users to input flat attributes and receive instant price estimates.",
    },
    {
      projectName: "Social Media Sentiment Analysis",
      association: "Personal Project",
      startDate: "2024-10",
      endDate: "2024-12",
      description:
        "- Scraped and processed Reddit post data using Python (PRAW, BeautifulSoup) to analyse public sentiment around local tech industry topics.\n- Applied NLP techniques including TF-IDF and VADER sentiment scoring; visualised results with word clouds and trend charts.",
    },
  ]);

  const [skillItems, setSkillItems] = useState([
    {
      skillGroup: "Languages",
      groupItems: "Python, SQL, R, JavaScript, Java",
    },
    {
      skillGroup: "Tools & Technologies",
      groupItems:
        "Pandas, NumPy, Scikit-learn, Tableau, PostgreSQL, React, Git",
    },
    {
      skillGroup: "Concepts",
      groupItems:
        "Machine Learning, Statistical Analysis, Data Visualisation, ETL Pipelines",
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

        <SkillInfo skillItems={skillItems} setSkillItems={setSkillItems} />
      </div>
      <div id="document-container">
        <MyDocument
          personalInfo={personalInfo}
          educationItems={educationItems}
          experienceItems={experienceItems}
          projectItems={projectItems}
          skillItems={skillItems}
        />
      </div>
    </div>
  );
}

export default App;
