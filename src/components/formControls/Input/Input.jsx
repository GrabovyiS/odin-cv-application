import { useId } from "react";
import "./Input.css";

function Input({
  type = "text",
  name,
  required = false,
  label,
  onChange,
  value,
}) {
  const id = useId();
  return (
    <div className="form-control">
      <label className={required ? "label-required" : ""} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        value={value}
        type={type}
        required={required}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
