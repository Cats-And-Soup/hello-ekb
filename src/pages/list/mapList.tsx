import { YMaps, Map, Placemark } from "react-yandex-maps";
import * as React from "react";
import "./list.css";
import { Button } from "../../shared/ui/button.tsx";
import { useNavigate } from "react-router";

export const MapList = () => {
  const navigate = useNavigate();
  return (
    <div className={"map-wrapper"}>
      <div className={"list-type-button-wrapper"}>
        <Button onClick={() => navigate("/")}>Показать списком</Button>
      </div>
      <MapComponent />
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