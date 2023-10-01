import React from "react";

const InputBox = ({ type, name, bgColor, color, placeholder, required }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        className="input-box"
        style={{ backgroundColor: bgColor, color: color }}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};



const TextArea = ({
  rows,
  cols,
  name,
  bgColor,
  color,
  placeholder,
  required,
}) => {
  return (
    <div>
      <textarea
        className="input-box"
        name={name}
        cols={cols}
        rows={rows}
        style={{ backgroundColor: bgColor, color: color }}
        placeholder={placeholder}
        required={required}
      ></textarea>
    </div>
  );
};



const SubmitBtn = ({ bgColor, color, name }) => {
  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: bgColor, color: color }}
      >
        {name}
      </button>
    </div>
  );
};

export { InputBox, SubmitBtn, TextArea };
