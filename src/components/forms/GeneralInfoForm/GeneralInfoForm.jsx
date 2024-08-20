import StaticForm from "../StaticForm/StaticForm";

function GeneralInfoForm({ handleSubmitCallback }) {
  const fields = [
    {
      type: "text",
      name: "name",
      label: "Name:",
    },
    {
      type: "text",
      name: "profession",
      label: "Profession:",
    },
    {
      type: "email",
      name: "email",
      label: "Email:",
    },
    {
      type: "tel",
      name: "phone",
      label: "Phone:",
    },
  ];

  return (
    <StaticForm
      title={"General"}
      fields={fields}
      handleSubmitCallback={handleSubmitCallback}
    />
  );
}

export default GeneralInfoForm;
