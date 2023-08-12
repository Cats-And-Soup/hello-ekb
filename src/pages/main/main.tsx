import { Chip } from "../../shared/ui/chip.tsx";
import "./main.css";
import { Slider } from "../../widgets/slider/slider.tsx";
import { DefaultEvents } from "../../shared/types/event.ts";

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
      <section>Сегодня</section>
      <section>Самые ожидаемые</section>
      <section>Бесплатно</section>
    </div>
  );
};
