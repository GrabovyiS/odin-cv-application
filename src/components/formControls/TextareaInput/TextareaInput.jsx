import "./TextareaInput.css";

function TextareaInput({ type = "text", name, label, onChange, value }) {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
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
