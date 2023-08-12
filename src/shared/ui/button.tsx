import * as React from "react";
import { PropsWithChildren } from "react";
import "./button.css";

export const Button: React.FC<
  PropsWithChildren<{ onClick: () => void; width?: string }>
> = ({ onClick, children, width }) => {
  return (
    <button className={"button-kit"} style={{ width }} onClick={onClick}>
      {children}
    </button>
  );
};
