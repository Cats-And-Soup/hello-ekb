import { Chip } from "../../shared/ui/chip.tsx";
import "./main.css";
import { Slider } from "../../widgets/slider/slider.tsx";
import { DefaultEvents, IEvent } from "../../shared/types/event.ts";
import { Card } from "../../widgets/card/card.tsx";
import * as React from "react";

const CardSection: React.FC<{ title: string; events: IEvent[] }> = ({
  title,
  events,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "25px",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "500" }}>
        {title} {">"}
      </p>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {events.map((ev) => (
          <Card
            title={ev.title}
            description={ev.date + " в " + ev.time}
            imageSrc={ev.image}
          />
        ))}
      </div>
    </div>
  );
};

export const Main = () => {
  return (
    <div className={"main-wrapper"}>
      <section>
        {["ул. Ленина 104 будет перекрыта до 18.04 "].map((item, index) => (
          <Chip key={index} type={"alert"}>
            {item}
          </Chip>
        ))}
      </section>
      <section>
        <Slider events={DefaultEvents} />
      </section>
      <CardSection title={"Нет времени ждать"} events={DefaultEvents} />
      <CardSection title={"Самые ожидаемые"} events={DefaultEvents} />
      <CardSection title={"Бесплатно"} events={DefaultEvents} />
    </div>
  );
};
