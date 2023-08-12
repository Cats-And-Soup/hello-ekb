import * as React from "react";
import { IEvent } from "../../shared/types/event.ts";
import { useState } from "react";
import { useNavigate } from "react-router";

type SliderProps = {
  events: IEvent[];
};

export const Slider: React.FC<SliderProps> = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();
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
              onClick={() => navigate("/event/" + eventModel.id)}
              style={{
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
            <div
              style={{
                position: "absolute",
                cursor: "pointer",
                left: "0",
                top: "0",
                width: "20%",
                height: "100%",
              }}
              onClick={() =>
                setCurrentIndex(
                  currentIndex - 1 === -1
                    ? events.length - 1
                    : currentIndex - 1,
                )
              }
            ></div>
            <div
              style={{
                position: "absolute",
                cursor: "pointer",
                left: "80%",
                top: "0",
                width: "20%",
                height: "100%",
              }}
              onClick={() =>
                setCurrentIndex(
                  currentIndex + 1 === events.length ? 0 : currentIndex + 1,
                )
              }
            ></div>
          </div>
        );
      })}
    </div>
  );
};
