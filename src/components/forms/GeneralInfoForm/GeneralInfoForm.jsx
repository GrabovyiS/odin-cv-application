import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { useState } from "react";

function GeneralInfoForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit} action="">
      <Input
        onChange={handleChange}
        value={formData.name}
        type="name"
        name="name"
        label="Name:"
      />
      <Input
        onChange={handleChange}
        value={formData.email}
        type="email"
        name="email"
        label="Email:"
      />
      <Input
        onChange={handleChange}
        value={formData.phone}
        type="tel"
        name="phone"
        label="Phone:"
      />
      <div className="form-buttons">
        <Button type="submit" option="success">
          Submit
        </Button>
        <Button>Edit</Button>
      </div>
    </form>
  );
}

export default GeneralInfoForm;
