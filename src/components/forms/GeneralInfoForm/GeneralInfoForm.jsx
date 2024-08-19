import StaticForm from "../StaticForm/StaticForm";

function GeneralInfoForm() {
  const fields = [
    {
      type: "text",
      name: "name",
      label: "Name:",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StaticForm title={"General"} fields={fields} onSubmit={handleSubmit} />
  );
}

export default GeneralInfoForm;
