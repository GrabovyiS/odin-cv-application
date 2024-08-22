import "./Button.css";

function Button({
  children,
  type = "button",
  onClick,
  alignSelf = "start",
  option = "primary",
  className,
}) {
  return (
    <button
      type={type}
      style={{ alignSelf }}
      className={option + " " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
