import * as React from "react";
import "./input.css";

interface IInput {
  value: string;
  width?: string;
  onChange: (v: string) => void;
  className?: string;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  placeholder,
  value,
  width,
  className,
  onChange,
}) => {
  return (
    <input
      className={"input-kit " + className}
      value={value}
      style={{ width }}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
