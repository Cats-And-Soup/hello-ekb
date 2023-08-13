import * as React from "react";
import { PropsWithChildren } from "react";
import "./button.css";

export const Button: React.FC<
  PropsWithChildren<{ onClick: () => void; width?: string; disabled?: boolean }>
> = ({ onClick, children, width, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={"button-kit"}
      style={{
        width,
        backgroundColor: disabled ? "#3f273d" : "#591153",
        cursor: disabled ? "default" : "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
