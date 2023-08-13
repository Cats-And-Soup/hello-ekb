import { YMaps, Map, Placemark } from "react-yandex-maps";
import * as React from "react";
import "./list.css";
import { Button } from "../../shared/ui/button.tsx";
import { useNavigate } from "react-router";
import { Chip } from "../../shared/ui/chip.tsx";
import { useEventsStore } from "../../shared/stores/events-store.ts";

export const MapList = () => {
  const navigate = useNavigate();
  return (
    <div className={"map-wrapper"}>
      <div className={"list-type-button-wrapper"}>
        <div className={"list-filters-wrapper"}>
          <Chip>Все</Chip>
          <Chip>Семейные</Chip>
          <Chip>Коммерческие</Chip>
        </div>
        <Button onClick={() => navigate("/")}>Показать списком</Button>
      </div>
      <MapComponent />
    </div>
  );
};

export const MapComponent: React.FC = () => {
  const { trandingEvents, freeEvents } = useEventsStore();
  const navigate = useNavigate();
  return (
    <YMaps>
      <Map
        height="100%"
        width="100%"
        defaultState={{ center: [56.842862, 60.652578], zoom: 14 }}
      >
        {trandingEvents.concat(freeEvents).map((ev) => (
          <Placemark
            geometry={[parseFloat(ev.lon), parseFloat(ev.lat)]}
            options={{ hintContent: ev.title }}
            onClick={() => navigate("/event/" + ev.id)}
          />
        ))}
      </Map>
    </YMaps>
  );
};
