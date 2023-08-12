import * as React from "react";
import { IEvent } from "../../shared/types/event.ts";
import { useState } from "react";

type SliderProps = {
  events: IEvent[];
};

export const Slider: React.FC<SliderProps> = ({ events }) => {
  const [currentIndex] = useState<number>(0);
  return (
    <div className={"slider"}>
      {events.map((eventModel: IEvent, index) => {
        if (currentIndex !== index) {
          return null;
        }
        return (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src={eventModel.image}
              width={"100%"}
              height={"100%"}
              alt={"123123123"}
              style={{
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                minHeight: "100%",
                minWidth: "100%",
                objectFit: "cover",
              }}
            />
            <h3
              style={{
                color: "white",
                position: "absolute",
                textTransform: "uppercase",
                top: "75%",
                left: "50px",
                fontSize: "26px",
              }}
            >
              {eventModel.title}
            </h3>
            <p
              style={{
                color: "white",
                position: "absolute",
                top: "calc(75% + 35px)",
                left: "50px",
              }}
            >
              {eventModel.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
