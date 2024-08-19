import { useId } from "react";
import "./TextareaInput.css";

function TextareaInput({ type = "text", name, label, onChange, value }) {
  const id = useId();
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        rows="5"
      />
    </div>
  );
}

export default TextareaInput;
