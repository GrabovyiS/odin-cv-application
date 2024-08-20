import GeneralInfoForm from "./components/forms/GeneralInfoForm/GeneralInfoForm";
import EducationForm from "./components/forms/EducationForm/EducationForm";
import WorkExperienceForm from "./components/forms/WorkExperienceForm/WorkExperienceForm";
import CV from "./components/CV/CV";
import { useState } from "react";
import "./App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState(null);
  const [educations, setEducations] = useState(null);
  const [workExperiences, setWorkExperiences] = useState(null);

  const handleGeneralSubmit = (generalData) => {
    setGeneralInfo(generalData);
  };

  const handleEducationsSubmit = (educationsData) => {
    setEducations(educationsData);
  };

  const handleWorkExperiencesSubmit = (workExperiencesData) => {
    setWorkExperiences(workExperiencesData);
  };

  return (
    <>
      <header>
        <h1>CV Application</h1>
      </header>
      <main className="main-container">
        <section className="forms-section">
          <GeneralInfoForm handleSubmitCallback={handleGeneralSubmit} />
          <EducationForm handleSubmitCallback={handleEducationsSubmit} />
          <WorkExperienceForm
            handleSubmitCallback={handleWorkExperiencesSubmit}
          />
        </section>
        <CV
          general={generalInfo}
          educations={educations}
          workExperiences={workExperiences}
        />
      </main>
    </>
  );
}

export default App;
