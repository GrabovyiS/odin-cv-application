import GeneralInfoForm from "./components/forms/GeneralInfoForm/GeneralInfoForm";
import EducationForm from "./components/forms/EducationForm/EducationForm";
import "./App.css";
import JobExperienceForm from "./components/forms/JobExperienceForm/JobExperienceForm";

function App() {
  return (
    <main className="main-container">
      <section className="forms-section">
        <GeneralInfoForm />
        <EducationForm />
        <JobExperienceForm />
      </section>
      <section className="cv-section"></section>
    </main>
  );
}

export default App;
