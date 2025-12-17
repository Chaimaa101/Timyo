import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ name, color, onClick }) {
  const navigate = useNavigate();

  const colors = {
    lime: "bg-lime-400 hover:bg-lime-500",
    teal: "bg-teal-400 hover:bg-teal-500",
  };

  return (
    <button
      className={`${colors[color]} px-3 py-1 rounded font-semibold`}
      onClick={(e) => {
        onClick?.(e);                 
        navigate(`/${name.toLowerCase()}`); 
      }}
    >
      {name}
    </button>
  );
}

export default Button;
