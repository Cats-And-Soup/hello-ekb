import * as React from "react";

type CardProps = {
  title: string;
  description: string;
  imageSrc?: string;
};

export const Card: React.FC<CardProps> = ({
  title,
  imageSrc = "https://avatars.mds.yandex.net/get-afishanew/31447/b2d031c9ee891184872ac82bc08e7e37/s760x380",
  description,
}) => {
  return (
    <div className={"card-kit"}>
      <img
        src={imageSrc}
        width={290}
        style={{ objectFit: "cover", borderRadius: "12px" }}
        height={190}
        alt={"12312312"}
      />
      <h3>{title}</h3>
      <p style={{ color: "#5C5C5C", fontSize: "14px" }}>{description}</p>
    </div>
  );
};
