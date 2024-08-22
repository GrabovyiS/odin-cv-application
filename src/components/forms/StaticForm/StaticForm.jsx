import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { useState } from "react";

function StaticForm({ title, fields, handleSubmitCallback }) {
  // how fields would look
  // const fields = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     label: 'Name:',
  //     required: true,
  //   },
  //   {
  //     type: 'tel',
  //     name: 'phone',
  //     label: 'Phone:',
  //   }
  // ]

  const emptyFormData = {};
  fields.forEach((field) => {
    emptyFormData[field.name] = "";
  });

  const [formData, setFormData] = useState(emptyFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => (input.disabled = true));
    const buttons = form.querySelectorAll("button:not(.edit-button)");
    buttons.forEach((button) => (button.disabled = true));

    handleSubmitCallback(formData, e);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} action="">
      <h2>{title}</h2>
      {fields.map((field) => {
        return (
          <Input
            key={`${field.name}${field.label}`}
            type={field.type}
            required={field.required}
            name={field.name}
            label={field.label}
            onChange={handleChange}
            value={formData[field.name]}
          />
        );
      })}

      <div className="form-buttons">
        <Button type="submit" option="success">
          Submit
        </Button>
        <Button className="edit-button">Edit</Button>
      </div>
    </form>
  );
}

export default StaticForm;
