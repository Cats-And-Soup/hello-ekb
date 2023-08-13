import { useEffect } from "react";
import axios from "axios";
import { IEvent } from "../types/event.ts";
import { useEventsStore } from "../stores/events-store.ts";

export const useEvents = () => {
  const { setTrandingEvents, setFreeEvents, setClosestEvents, setAllEvents } =
    useEventsStore();
  useEffect(() => {
    axios
      .get<IEvent[]>(
        "http://100.76.84.25:8000/api/v1/events?tags=Tranding&limit=4",
      )
      .then((res) => {
        setTrandingEvents(res.data);
      });
  }, [setTrandingEvents]);
  useEffect(() => {
    axios
      .get<IEvent[]>("http://100.76.84.25:8000/api/v1/events?price=0&limit=4")
      .then((res) => {
        setFreeEvents(res.data);
      });
  }, [setFreeEvents]);
  useEffect(() => {
    axios
      .get<IEvent[]>("http://100.76.84.25:8000/api/v1/events?today=1&limit=4")
      .then((res) => {
        setClosestEvents(res.data);
      });
  }, [setClosestEvents]);
  useEffect(() => {
    axios
      .get<IEvent[]>("http://100.76.84.25:8000/api/v1/events")
      .then((res) => {
        setAllEvents(res.data);
      });
  }, [setAllEvents]);
};
