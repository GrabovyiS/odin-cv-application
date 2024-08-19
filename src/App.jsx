import GeneralInfoForm from "./components/forms/GeneralInfoForm/GeneralInfoForm";
import EducationForm from "./components/forms/EducationForm/EducationForm";
import "./App.css";
import JobExperienceForm from "./components/forms/JobExperienceForm/JobExperienceForm";

function App() {
  return (
    <div>
      <GeneralInfoForm />
      <EducationForm />
      <JobExperienceForm />
    </div>
  );
}

export default App;
