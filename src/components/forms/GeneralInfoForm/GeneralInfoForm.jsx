import StaticForm from "../StaticForm/StaticForm";

function GeneralInfoForm({ handleSubmitCallback }) {
  const fields = [
    {
      type: "text",
      name: "name",
      label: "Name:",
      required: true,
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
      required: true,
    },
    {
      type: "tel",
      name: "phone",
      label: "Phone:",
      required: true,
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
