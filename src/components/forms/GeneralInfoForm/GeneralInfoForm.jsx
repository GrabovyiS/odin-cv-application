import Input from "../../formControls/Input/Input";

function GeneralInfoForm() {
  const [formData, setFormData] = "";

  return (
    <form action="">
      <Input type="name" name={"name"} label={"Name:"} />
      <Input type="email" name={"email"} label={"Email:"} />
      <Input type="tel" name={"phone"} label={"Phone"} />
    </form>
  );
}

export default GeneralInfoForm;
