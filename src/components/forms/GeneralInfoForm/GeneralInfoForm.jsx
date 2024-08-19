import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";

function GeneralInfoForm() {
  const [formData, setFormData] = "";

  return (
    <form action="">
      <Input type="name" name={"name"} label={"Name:"} />
      <Input type="email" name={"email"} label={"Email:"} />
      <Input type="tel" name={"phone"} label={"Phone:"} />
      <Button>Text</Button>
      <Button option="danger">Text</Button>
      <Button option="success">Text</Button>
    </form>
  );
}

export default GeneralInfoForm;
