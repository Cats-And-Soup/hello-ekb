import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { IEvent } from "../../shared/types/event.ts";
import "./event-page.css";
import dayjs from "dayjs";
import { Button } from "../../shared/ui/button.tsx";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useFavsStore } from "../../shared/stores/favs-store.tsx";

export const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { id: userId } = useAuthStore();
  const [event, setEvent] = useState<IEvent | null>(null);

  const { favorites, setFavorites } = useFavsStore();

  useEffect(() => {
    axios
      .get<IEvent>("http://100.76.84.25:8000/api/v1/events/get/" + id)
      .then((res) => {
        setEvent(res.data);
      });
  }, []);

  const setFav = () => {
    axios
      .post<{ user_id: number; event_id: number }, AxiosResponse<number[]>>(
        "http://100.76.84.25:8000/api/v1/favorites/create",
        {
          user_id: userId,
          event_id: id,
        },
      )
      .then((res) => setFavorites(res.data));
  };
  return (
    <div className={"event-wrapper"}>
      <img
        height={"425px"}
        width={"100%"}
        style={{ objectFit: "cover", borderRadius: "12px" }}
        src={event?.image_src}
        alt={"event image"}
      />
      <div className="event-info">
        <div className="right-side-event">
          <h1 style={{ margin: "20px" }}>{event?.title}</h1>
          <h3 style={{ margin: "20px" }}>О мероприятии</h3>
          <p style={{ margin: "20px" }}>{event?.description}</p>
          <Button
            disabled={favorites.includes(Number(id))}
            onClick={() => setFav()}
          >
            {favorites.includes(Number(id)) ? "Уже иду" : "Я пойду"}
          </Button>
        </div>
        <div className="left-side-wrapper">
          <h3>Адрес</h3>
          <p>{event?.address}</p>
          <h3>Дата начала</h3>
          <p>
            {dayjs(event?.start_datetime)
              .add(5, "hours")
              .format("DD.MM.YYYY HH:mm")}
          </p>
          <h3>Дата конца</h3>
          <p>
            {dayjs(event?.end_datetime)
              .add(5, "hours")
              .format("DD.MM.YYYY HH:mm")}
          </p>
        </div>
      </div>
    </div>
  );
};
