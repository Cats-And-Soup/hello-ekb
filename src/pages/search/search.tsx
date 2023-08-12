import { Input } from "../../shared/ui/input.tsx";
import { useState } from "react";
import { DefaultEvents } from "../../shared/types/event.ts";
import { Card } from "../../widgets/card/card.tsx";
import "./search.css";
import { useNavigate } from "react-router";

export const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  return (
    <div className={"search-wrapper"}>
      <Input
        value={searchInput}
        placeholder={"Поиск"}
        onChange={setSearchInput}
        width={"600px"}
      />
      <div className={"search-results"}>
        {DefaultEvents.map((ev) => (
          <Card
            onClick={() => navigate("/event/" + ev.id)}
            title={ev.title}
            description={ev.date}
            tags={ev.tags}
            imageSrc={ev.image}
            key={ev.id}
          />
        ))}
      </div>
    </div>
  );
};
