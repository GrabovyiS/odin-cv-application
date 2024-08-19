import DynamicForm from "../DynamicForm/DynamicForm";

function EducationForm() {
  const fields = [
    {
      type: "text",
      name: "school",
      label: "School:",
    },
    {
      type: "text",
      name: "title",
      label: "Title of study:",
    },
    {
      type: "date",
      name: "start-date",
      label: "Start date of education:",
    },
    {
      type: "date",
      name: "end-date",
      label: "End date of education:",
    },
  ];

  return (
    <DynamicForm
      title="Education"
      objectName="education info"
      fields={fields}
    />
  );
}

export default EducationForm;
