import "./chip.css";
import * as React from "react";
import { PropsWithChildren } from "react";
export const Chip: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={"chip-kit"}>
      <p>{children}</p>
    </div>
  );
};
