import "./schedule.css";
import { Block } from "./block/block.tsx";

export const Schedule = () => {
  return (
    <div className={"schedule-wrapper"}>
      <h2 style={{ padding: "30px 0" }}>Календарь событий</h2>
      <div className={"schedule"}>
        <div className="day-of-week">
          <div className="title">7.08</div>
          <Block title={"Выведение блох"} time={"14:00"} />
          <Block title={"Молчание ягнят"} time={"16:00"} />
        </div>
        <div className="day-of-week">
          <div className="title">8.08</div>
          <div
            style={{
              fontSize: "14px",
              color: "gray",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Ничего не запланировано
          </div>
        </div>
        <div className="day-of-week">
          <div className="title">9.08</div>
          <Block title={"Питиё свежей святой водки"} time={"18:00"} />
          <Block title={"Смерть и перерождение"} time={"23:00"} />
          <Block title={"Орел и решка"} time={"23:00"} />
        </div>
        <div className="day-of-week">
          <div className="title">10.08</div>
          <div
            style={{
              fontSize: "14px",
              color: "gray",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Ничего не запланировано
          </div>
        </div>
        <div className="day-of-week">
          <div className="title">11.08</div>
          <div
            style={{
              fontSize: "14px",
              color: "gray",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Ничего не запланировано
          </div>
        </div>
        <div className="day-of-week">
          <div className="title">12.08</div>
          <div
            style={{
              fontSize: "14px",
              color: "gray",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Ничего не запланировано
          </div>
        </div>
        <div className="day-of-week">
          <div className="title">13.08</div>
          <div
            style={{
              fontSize: "14px",
              color: "gray",
              textAlign: "center",
              padding: "10px",
            }}
          >
            Ничего не запланировано
          </div>
        </div>
      </div>
    </div>
  );
};
