import "./Button.css";

function Button({
  children,
  type = "button",
  onClick,
  alignSelf = "start",
  option = "primary",
  className,
  disabled = false,
}) {
  return (
    <button
      type={type}
      style={{ alignSelf }}
      disabled={disabled}
      className={option + " " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
