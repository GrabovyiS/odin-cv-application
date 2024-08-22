import StaticForm from "../StaticForm/StaticForm";

function GeneralInfoForm({ handleSubmitCallback }) {
  const phoneRegex =
    /\+?[0-9] ?(?:(?:\([0-9]{3}\))|(?:[0-9]{3}))[ -]?[0-9]{3}[ -]?[0-9]{2}[ -]?[0-9]{2}/gm;

  const phoneIsValid = (phoneNumber) => {
    return phoneRegex.test(phoneNumber);
  };

  const validatePhoneInput = (e) => {
    if (!phoneIsValid(e.target.value)) {
      e.target.setCustomValidity(
        "Please enter a valid phone number like so: +12345678900"
      );
    } else {
      e.target.setCustomValidity("");
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
      validate: validatePhoneInput,
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
