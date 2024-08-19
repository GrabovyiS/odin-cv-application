import Input from "../../formControls/Input/Input";
import Button from "../../formControls/Button/Button";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import TextareaInput from "../../formControls/TextareaInput/TextareaInput";

function DynamicForm({
  title,
  objectName,
  fields,
  onSubmit = (e) => {
    e.preventDefault();
  },
}) {
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

  const emptyFormData = [{ id: uuid() }];
  fields.forEach((field) => {
    emptyFormData[0][field.name] = "";
  });

  const [formData, setFormData] = useState(emptyFormData);

  const handleCreateSubForm = () => {
    const newData = { id: uuid() };
    fields.forEach((field) => {
      newData[field.name] = "";
    });

    setFormData([...formData, newData]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const changedSubFormId = e.target.closest("fieldset").id;

    const dataCopy = structuredClone(formData);
    const changedSubFormIndex = dataCopy.findIndex(
      (data) => data.id === changedSubFormId
    );

    dataCopy[changedSubFormIndex] = {
      ...dataCopy[changedSubFormIndex],
      [name]: value,
    };

    setFormData(dataCopy);
  };

  const handleDeleteSubForm = (e) => {
    const subFormId = e.target.closest("fieldset").id;
    const dataCopy = structuredClone(formData);
    const clickedIndex = dataCopy.findIndex((data) => data.id === subFormId);
    dataCopy.splice(clickedIndex, 1);
    setFormData(dataCopy);
  };

  return (
    <form className="form-container" onSubmit={onSubmit} action="">
      <h2>{title}</h2>

      {formData.map((subForm) => {
        return (
          <fieldset id={subForm.id} key={subForm.id}>
            <legend>
              {subForm[fields[0].name]
                ? subForm[fields[0].name]
                : objectName.charAt(0).toUpperCase() + objectName.slice(1)}
            </legend>
            {fields.map((field) => {
              if (field.type === "textarea") {
                return (
                  <TextareaInput
                    key={`${field.name}${subForm.id}`}
                    name={field.name}
                    label={field.label}
                    onChange={handleChange}
                    value={subForm[field.name]}
                  />
                );
              } else {
                return (
                  <Input
                    key={`${field.name}${subForm.id}`}
                    type={field.type}
                    name={field.name}
                    label={field.label}
                    onChange={handleChange}
                    value={subForm[field.name]}
                  />
                );
              }
            })}

            <Button
              alignSelf="end"
              onClick={handleDeleteSubForm}
              option="danger"
            >
              Delete {objectName ? objectName : "entry"}
            </Button>
          </fieldset>
        );
      })}

      <div className="form-buttons">
        <Button onClick={handleCreateSubForm} option="success">
          Add {objectName ? objectName : "entry"}
        </Button>
      </div>
      <div className="form-buttons">
        <Button type="submit" option="success">
          Submit
        </Button>
        <Button>Edit</Button>
      </div>
    </form>
  );
}

export default DynamicForm;
