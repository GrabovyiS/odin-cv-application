import "./Input.css";

function Input({ type = "text", name, label, onChange, value }) {
  console.log("rerender input");

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        id={`${name}${label}`}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
      />
    </div>
  );
}

export default Input;
