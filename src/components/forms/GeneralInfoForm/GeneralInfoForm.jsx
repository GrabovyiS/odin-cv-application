import StaticForm from "../StaticForm/StaticForm";

function GeneralInfoForm({ handleSubmitCallback }) {
  const phoneRegex =
    /\+?[0-9] ?(?:(?:\([0-9]{3}\))|(?:[0-9]{3}))[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}/gm;

  const phoneIsValid = (phoneNumber) => {
    return phoneRegex.test(phoneNumber);
  };

  const validatePhone = (phoneNumber) => {
    if (phoneIsValid(phoneNumber)) {
      // setCustomValidity ...
    }
  };

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
