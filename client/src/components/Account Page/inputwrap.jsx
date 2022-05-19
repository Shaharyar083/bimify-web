import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputWrap = ({
  label,
  required,
  id,
  name,
  placeholder,
  type,
  eye,
  message,
  value,
  onChange,
  onClick,
}) => {
  return (
    <div className="input-wrap">
      <div className="label">
        {label} <span>{required ? "*" : ""}</span>
      </div>

      <div className="input">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {eye && <FaEye className="icon" onClick={onClick} />}
        {type === "text" && eye === false && (
          <FaEyeSlash className="icon" onClick={onClick} />
        )}
      </div>

      {message && <div className="msg">{message}</div>}
    </div>
  );
};

export default InputWrap;
