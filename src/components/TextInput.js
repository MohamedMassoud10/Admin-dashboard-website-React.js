import React from "react";
import "./TextInput.css";
const TextInput = ({ label, value, onChange, placeholder }) => (
  <div>
    <label>{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  </div>
);

export default TextInput;
