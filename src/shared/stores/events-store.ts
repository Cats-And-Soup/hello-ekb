import { IEvent } from "../types/event.ts";
import { create } from "zustand";

type EventsStore = {
  allEvents: IEvent[];
  setAllEvents: (events: IEvent[]) => void;
  trandingEvents: IEvent[];
  setTrandingEvents: (events: IEvent[]) => void;
  closestEvents: IEvent[];
  setClosestEvents: (events: IEvent[]) => void;
  freeEvents: IEvent[];
  setFreeEvents: (events: IEvent[]) => void;
};

export const useEventsStore = create<EventsStore>((set) => ({
  allEvents: [],
  setAllEvents: (allEvents) => set(() => ({ allEvents })),
  trandingEvents: [],
  setTrandingEvents: (trandingEvents) => set(() => ({ trandingEvents })),
  closestEvents: [],
  setClosestEvents: (closestEvents) => set(() => ({ closestEvents })),
  freeEvents: [],
  setFreeEvents: (freeEvents) => set(() => ({ freeEvents })),
}));
