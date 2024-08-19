import DynamicForm from "../DynamicForm/DynamicForm";

function JobExperienceForm() {
  const fields = [
    {
      type: "text",
      name: "company-name",
      label: "Company name:",
    },
    {
      type: "text",
      name: "position-title",
      label: "Position title:",
    },
    {
      type: "textarea",
      name: "Responsibilities",
      label: "Responsibilities:",
    },
    {
      type: "date",
      name: "start-date",
      label: "Start date of work:",
    },
    {
      type: "date",
      name: "end-date",
      label: "End date of work:",
    },
  ];

  return (
    <DynamicForm
      title="Work experience"
      objectName="job info"
      fields={fields}
    />
  );
}

export default JobExperienceForm;
