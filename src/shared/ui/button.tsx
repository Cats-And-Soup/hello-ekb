import * as React from "react";
import { PropsWithChildren } from "react";
import "./button.css";

export const Button: React.FC<PropsWithChildren<{ onClick: () => void }>> = ({
  onClick,
  children,
}) => {
  return (
    <button className={"button-kit"} onClick={onClick}>
      {children}
    </button>
  );
};
