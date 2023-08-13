import { Input } from "../../shared/ui/input.tsx";
import { useState, useEffect } from "react";
import { Card } from "../../widgets/card/card.tsx";
import "./search.css";
import { useNavigate } from "react-router";
import dayjs from "dayjs";
import axios from "axios";
import { IEvent } from "../../shared/types/event.ts";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredEvents, setFilteredEvents] = useState<IEvent[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://100.76.84.25:8000/api/v1/events/find?text=${searchInput}`)
      .then((res) => {
        setFilteredEvents(res.data);
      });
  }, [searchInput]);
  return (
    <div className={"search-wrapper"}>
      <Input
        value={searchInput}
        placeholder={"Поиск"}
        onChange={setSearchInput}
        width={"600px"}
      />
      <div className={"search-results"}>
        {filteredEvents.map((ev) => (
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
