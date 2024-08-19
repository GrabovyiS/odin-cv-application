import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function EducationForm() {
  const [educationFormData, setEducationFormData] = useState([
    {
      id: uuid(),
      school: "",
      title: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(educationFormData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedEducationId = e.target.closest("fieldset").id;
    const educationsCopy = structuredClone(educationFormData);
    const changedEducationIndex = educationsCopy.findIndex(
      (education) => education.id === changedEducationId
    );

    educationsCopy[changedEducationIndex] = {
      ...educationsCopy[changedEducationIndex],
      [name]: value,
    };

    setEducationFormData(educationsCopy);
  };

  const handleCreateEducation = (e) => {
    const newEducation = {
      id: uuid(),
      school: "",
      title: "",
      startDate: "",
      endDate: "",
    };

    setEducationFormData([...educationFormData, newEducation]);
  };

  const handleDeleteEducation = (e) => {
    const clickedEducationId = e.target.closest("fieldset").id;
    const educationsCopy = structuredClone(educationFormData);
    const clickedEducationIndex = educationsCopy.findIndex(
      (education) => education.id === clickedEducationId
    );
    educationsCopy.splice(clickedEducationIndex, 1);
    setEducationFormData(educationsCopy);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} action="">
      {educationFormData.map((education) => {
        return (
          <fieldset
            id={education.id}
            key={education.id}
            className="form-container"
          >
            <legend>
              {education.school === "" ? "School name" : education.school}
            </legend>
            <Input
              onChange={handleChange}
              value={education.school}
              name="school"
              label="School:"
            />
            <Input
              onChange={handleChange}
              value={education.title}
              name="title"
              label="Title of study:"
            />
            <Input
              onChange={handleChange}
              value={education.startDate}
              type="date"
              name="start-date"
              label="Start date of study:"
            />
            <Input
              onChange={handleChange}
              value={education.endDate}
              type="date"
              name="end-date"
              label="End date of study:"
            />
            <div className="form-buttons">
              <Button onClick={handleDeleteEducation} option="danger">
                Delete education
              </Button>
            </div>
          </fieldset>
        );
      })}
      <div className="form-buttons">
        <Button onClick={handleCreateEducation} option="success">
          Add another education
        </Button>
      </div>
      <div className="form-buttons">
        <Button type="submit" option="success">
          Submit
        </Button>
        <Button>Edit</Button>
      </div>
    </form>
  );
}

export default EducationForm;
