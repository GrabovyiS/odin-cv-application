import { useId } from "react";
import "./Input.css";

function Input({ type = "text", name, label, onChange, value }) {
  const id = useId();
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}

export default Input;
