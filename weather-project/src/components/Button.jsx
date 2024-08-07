import React from "react";
import { LinkedinIcon } from "./LinkedinIcon";

export const Button = ({
  text,
  onClick,
  typeOfButton,
  link,
  colors,
}) => {
  
  if(!colors) colors = {primary: "#3b82f6", secondary: "#1d4ed8"};
  const textColor = colors.primary === "#f7cf4d" ? "#000000" : "ffffff";

  const renderButton = () => {
    switch (typeOfButton) {
      case "info":
        return (
          <button
            onClick={onClick}
            className="bt-info w-1/4 bg-[#2561bd] text-white rounded p-2 hover:bg-[transparent]transition-all"
            style={{ backgroundColor: colors.primary, color: textColor }}
          >
            {text}
          </button>
        );
        break;
      case "secondary":
        return (
          <button
            onClick={onClick}
            className="btn bg-[#31363F] text-white rounded-lg p-2 hover:bg-[#222831]"
          >
            {text}
          </button>
        );
        break;
      case "us":
        return (
          <button
            onClick={onClick}
            href={link}
            className="bt-us w-1/4 flex gap-4 justify-center items-center bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700 rounded"
            style={{
              backgroundColor: colors.primary,
              color: textColor,
              borderColor: colors.secondary,
            }}
          >
            <LinkedinIcon />
            {text}
          </button>
        );
        break;
      default:
        return (
          <button
            onClick={onClick}
            className="btn bg-[#222831] text-white rounded-lg p-2 hover:bg-[#31363F]"
          >
            {text}
          </button>
        );
    }
  };

  return renderButton();
};
