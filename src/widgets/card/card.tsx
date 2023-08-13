import * as React from "react";
import Fire from "../../shared/assets/fire.png";
import "./card.css";

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
  tags?: string[];
  onClick?: () => void;
};

export const Card: React.FC<CardProps> = ({
  title,
  imageSrc = "https://avatars.mds.yandex.net/get-afishanew/31447/b2d031c9ee891184872ac82bc08e7e37/s760x380",
  description,
  onClick,
  tags = [],
}) => {
  const isTranding = tags.includes("Tranding");
  const isForAdults = tags.includes("18+");

  return (
    <div className={"card-kit"} onClick={onClick}>
      <img
        src={imageSrc}
        width={290}
        style={{ objectFit: "cover", borderRadius: "12px" }}
        height={190}
        alt={"12312312"}
      />
      <div className={"card-title"}>
        <h3>{title}</h3>
        {isTranding && <img src={Fire} alt={"fire"} />}
      </div>
      <p style={{ color: "#5C5C5C", fontSize: "14px" }}>{description}</p>
      {isForAdults && (
        <p
          style={{
            position: "absolute",
            right: "20px",
            top: "10px",
            color: "white",
            userSelect: "none",
            fontSize: "14px",
          }}
        >
          18+
        </p>
      )}
    </div>
  );
};
