import DynamicForm from "../DynamicForm/DynamicForm";

function EducationForm({ handleSubmitCallback }) {
  const fields = [
    {
      type: "text",
      name: "school",
      label: "School:",
      required: true,
    },
    {
      type: "text",
      name: "title",
      label: "Title of study:",
      required: true,
    },
    {
      type: "date",
      name: "start-date",
      label: "Start date of education:",
      required: true,
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
      handleSubmitCallback={handleSubmitCallback}
    />
  );
}

export default EducationForm;
