import "./Button.css";

function Button({
  children,
  type = "button",
  onClick,
  alignSelf = "start",
  option = "primary",
}) {
  return (
    <button
      type={type}
      style={{ alignSelf }}
      className={option}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
