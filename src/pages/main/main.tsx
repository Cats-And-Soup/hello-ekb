import { Chip } from "../../shared/ui/chip.tsx";
import "./main.css";
import { Slider } from "../../widgets/slider/slider.tsx";
import { IEvent } from "../../shared/types/event.ts";
import { Card } from "../../widgets/card/card.tsx";
import * as React from "react";
import { useEventsStore } from "../../shared/stores/events-store.ts";
import dayjs from "dayjs";

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
            key={ev.id}
            tags={ev.tags}
            description={
              "Начало в " +
              dayjs(ev.start_datetime).add(5, "hours").format("HH:mm DD.MM")
            }
            imageSrc={ev.image_src}
          />
        ))}
      </div>
    </div>
  );
};

export const Main = () => {
  const { trandingEvents, freeEvents, closestEvents } = useEventsStore();

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
        <Slider events={trandingEvents} />
      </section>
      <CardSection title={"Нет времени ждать"} events={closestEvents} />
      <CardSection title={"Самые ожидаемые"} events={trandingEvents} />
      <CardSection title={"Бесплатно"} events={freeEvents} />
    </div>
  );
};
