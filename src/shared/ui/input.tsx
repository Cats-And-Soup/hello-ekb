import * as React from "react";
import "./input.css";

interface IInput {
  value: string;
  width?: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
  type?: string;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  value,
  width,
  className,
  onChange,
  type = "text",
}) => {
  return (
    <input
      className={"input-kit " + className}
      value={value}
      style={{ width }}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
