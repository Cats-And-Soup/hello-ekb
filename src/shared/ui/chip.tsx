import "./chip.css";
import * as React from "react";
import { PropsWithChildren } from "react";
export const Chip: React.FC<
  PropsWithChildren<{ type: "alert" | "default" }>
> = ({ children, type = "default" }) => {
  return (
    <div
      className={"chip-kit"}
      style={{
        backgroundColor: type === "alert" ? "#CD3535" : "#fafafa",
        color: type === "alert" ? "white" : "black",
        borderRadius: "12px",
      }}
    >
      <p>{children}</p>
    </div>
  );
};
