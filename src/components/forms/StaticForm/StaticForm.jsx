import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { useState } from "react";

function StaticForm({ title, fields, onSubmit }) {
  // how fields would look
  // const fields = [
  //   {
  //     type: 'text',
  //     name: 'name',
  //     label: 'Name:',
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
  console.log(emptyFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="form-container" onSubmit={onSubmit} action="">
      <h2>{title}</h2>
      {fields.map((field) => {
        return (
          <Input
            key={`${field.name}${field.label}`}
            type={field.type}
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
        <Button>Edit</Button>
      </div>
    </form>
  );
}

export default StaticForm;
