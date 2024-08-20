import DynamicForm from "../DynamicForm/DynamicForm";

function WorkExperienceForm({ handleSubmitCallback }) {
  const fields = [
    {
      type: "text",
      name: "company",
      label: "Company name:",
      required: true,
    },
    {
      type: "text",
      name: "title",
      label: "Position title:",
      required: true,
    },
    {
      type: "textarea",
      name: "responsibilities",
      label: "Responsibilities:",
    },
    {
      type: "date",
      name: "start-date",
      label: "Start date of work:",
      required: true,
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
      handleSubmitCallback={handleSubmitCallback}
    />
  );
}

export default WorkExperienceForm;
