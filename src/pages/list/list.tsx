import { YMaps, Map, Placemark } from "react-yandex-maps";

export const List = () => {
  return (
    <div>
      <MapComponent />
    </div>
  );
};

export const MapComponent = () => {
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
