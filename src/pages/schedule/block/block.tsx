import * as React from "react";

type BlockProps = {
  title: string;
  time: string;
};

export const Block: React.FC<BlockProps> = ({ title, time }) => {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "70px",
        height: "min-content",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        backgroundColor: "#691C621A",
        padding: "10px",
        userSelect: "none",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ fontSize: "14px" }}>{title}</h3>
      <p style={{ fontSize: "12px" }}>{time}</p>
    </div>
  );
};
