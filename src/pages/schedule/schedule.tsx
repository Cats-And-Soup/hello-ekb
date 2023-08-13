import "./schedule.css";
import { Block } from "./block/block.tsx";
import { useEventsStore } from "../../shared/stores/events-store.tsx";
import dayjs from "dayjs";
import { useFavsStore } from "../../shared/stores/favs-store.tsx";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const Schedule = () => {
  const { allEvents } = useEventsStore();
  const { favorites } = useFavsStore();
  const { id } = useAuthStore();
  const navigate = useNavigate();
  const myEvents = allEvents.filter((ev) => favorites.includes(Number(ev.id)));
  useEffect(() => {
    if (!id) {
      navigate("/sign-in");
    }
  }, []);

  return (
    <div className={"schedule-wrapper"}>
      <h2 style={{ padding: "30px 0" }}>Календарь событий</h2>
      <div className={"schedule"}>
        <div className="day-of-week">
          <div className="title">12.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 12)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">13.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 13)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">14.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 14)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">15.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 15)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">16.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 16)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">17.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 17)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
        <div className="day-of-week">
          <div className="title">18.08</div>
          {myEvents
            .filter((ev) => dayjs(ev.start_datetime).date() === 18)
            .map((ev) => (
              <Block title={ev.title} time={ev.start_datetime} key={ev.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
