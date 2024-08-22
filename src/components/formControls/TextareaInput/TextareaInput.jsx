import { useId } from "react";
import "./TextareaInput.css";

function TextareaInput({
  type = "text",
  disabled = false,
  required,
  name,
  label,
  onChange,
  value,
}) {
  const id = useId();
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        disabled={disabled}
        required={required}
        onChange={onChange}
        value={value}
        type={type}
        rows="5"
      />
    </div>
  );
}

export default TextareaInput;
