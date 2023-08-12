import { useNavigate } from "react-router";
import { useBurgerStore } from "../../shared/stores/burger-store.tsx";
import "./burger.css";

export const BurgerMenu = () => {
  const navigate = useNavigate();
  const { setIsOpened } = useBurgerStore();
  return (
    <div
      className={"burger"}
      style={{
        position: "absolute",
        zIndex: 2,
        top: 0,
        left: 0,
        width: "300px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backgroundColor: "white",
        padding: "100px 50px",
      }}
    >
      <p
        onClick={() => {
          navigate("/");
          setIsOpened(false);
        }}
      >
        Главная {">"}
      </p>
      <p
        onClick={() => {
          navigate("/map-list");
          setIsOpened(false);
        }}
      >
        Карта {">"}
      </p>
      <p
        onClick={() => {
          navigate("/profile");
          setIsOpened(false);
        }}
      >
        Профиль {">"}
      </p>
      <p
        onClick={() => {
          navigate("/schedule");
          setIsOpened(false);
        }}
      >
        Календарь событий {">"}
      </p>
    </div>
  );
};
