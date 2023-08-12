import { Chip } from "../../shared/ui/chip.tsx";
import "./main.css";
import { Slider } from "../../widgets/slider/slider.tsx";
import { DefaultEvents } from "../../shared/types/event.ts";
import { Card } from "../../widgets/card/card.tsx";

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
      <p style={{ fontSize: "20px", fontWeight: "500" }}>Сегодня {">"}</p>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
        }}
      >
        {DefaultEvents.map((ev) => (
          <Card
            title={ev.title}
            description={ev.date + " в " + ev.time}
            imageSrc={ev.image}
          />
        ))}
      </div>
      <section>Самые ожидаемые</section>
      <section>Бесплатно</section>
    </div>
  );
};
