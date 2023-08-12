import { YMaps, Map, Placemark } from "react-yandex-maps";
import { useState } from "react";
import * as React from "react";
import "./list.css";

export const List = () => {
  const [type, setType] = useState<"map" | "list">("map");
  return (
    <div className={"map-wrapper"}>
      <div className={"list-type-button-wrapper"}>
        <button onClick={() => setType(type === "map" ? "list" : "map")}>
          Показать {type === "map" ? "списком" : "картой"}
        </button>
      </div>
      {type === "map" ? <MapComponent /> : <ListRepresentation />}
    </div>
  );
};

export const ListRepresentation: React.FC = () => {
  return <div>Список</div>;
};

export const MapComponent: React.FC = () => {
  return (
    <YMaps>
      <Map
        height="100%"
        width="100%"
        defaultState={{ center: [56.842862, 60.652578], zoom: 14 }}
      >
        <Placemark geometry={[56.840508, 60.650206]} />
      </Map>
    </YMaps>
  );
};
