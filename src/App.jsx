import { useState } from "react";
import GeneralInfoForm from "./components/forms/GeneralInfoForm/GeneralInfoForm";
import EducationForm from "./components/forms/EducationForm/EducationForm";
import "./App.css";

function App() {
  return (
    <div>
      <GeneralInfoForm />
      <EducationForm />
    </div>
  );
}

export default App;
