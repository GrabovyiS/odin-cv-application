import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import TextareaInput from "../../formControls/TextareaInput/TextareaInput";

function JobExperienceForm() {
  const [jobsFormData, setJobsFormData] = useState([
    {
      id: uuid(),
      companyName: "",
      title: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedJobId = e.target.closest("fieldset").id;

    const jobsCopy = structuredClone(jobsFormData);
    const changedJobIndex = jobsCopy.findIndex(
      (job) => job.id === changedJobId
    );

    jobsCopy[changedJobIndex] = {
      ...jobsCopy[changedJobIndex],
      [name]: value,
    };

    setJobsFormData(jobsCopy);
  };

  const handleCreateJob = (e) => {
    const newJob = {
      id: uuid(),
      companyName: "",
      title: "",
      responsibilities: "",
      startDate: "",
      endDate: "",
    };

    setJobsFormData([...jobsFormData, newJob]);
  };

  const handleDeleteJob = (e) => {
    const clickedJobId = e.target.closest("fieldset").id;
    const jobsCopy = structuredClone(jobsFormData);
    const clickedJobIndex = jobsCopy.findIndex(
      (education) => education.id === clickedJobId
    );
    jobsCopy.splice(clickedJobIndex, 1);
    setJobsFormData(jobsCopy);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} action="">
      {jobsFormData.map((job) => {
        return (
          <fieldset id={job.id} key={job.id} className="form-container">
            <legend>
              {job.companyName === "" ? "Company name" : job.companyName}
            </legend>
            <Input
              onChange={handleChange}
              value={job.companyName}
              name="companyName"
              label="Company name:"
            />
            <Input
              onChange={handleChange}
              value={job.title}
              name="title"
              label="Position title:"
            />
            <TextareaInput
              onChange={handleChange}
              value={job.responsibilities}
              name="responsibilities"
              label="Responsibilities:"
            />
            <Input
              onChange={handleChange}
              value={job.startDate}
              type="date"
              name="startDate"
              label="Start date of work:"
            />
            <Input
              onChange={handleChange}
              value={job.endDate}
              type="date"
              name="endDate"
              label="End date of work:"
            />
            <div className="form-buttons">
              <Button onClick={handleDeleteJob} option="danger">
                Delete job
              </Button>
            </div>
          </fieldset>
        );
      })}
      <div className="form-buttons">
        <Button onClick={handleCreateJob} option="success">
          Add another job
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

export default JobExperienceForm;
