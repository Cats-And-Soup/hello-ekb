import { Input } from "../../shared/ui/input.tsx";
import { useState } from "react";
import { Card } from "../../widgets/card/card.tsx";
import "./search.css";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import { useEventsStore } from "../../shared/stores/events-store.ts";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const { allEvents } = useEventsStore();
  console.log(allEvents);
  return (
    <div className={"search-wrapper"}>
      <Input
        value={searchInput}
        placeholder={"Поиск"}
        onChange={setSearchInput}
        width={"600px"}
      />
      <div className={"search-results"}>
        {allEvents.map((ev) => (
          <Card
            onClick={() => navigate("/event/" + ev.id)}
            title={ev.title}
            description={dayjs(ev.start_datetime)
              .add(5, "hours")
              .format("HH:mm DD.MM")}
            tags={ev.tags}
            imageSrc={ev.image_src}
            key={ev.id}
          />
        ))}
      </div>
    </div>
  );
};
