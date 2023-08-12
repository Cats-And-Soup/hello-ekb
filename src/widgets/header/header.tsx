import "./header.css";
import burger from "../../shared/assets/burger.svg";

export const Header = () => {
  return (
    <header className={"header"}>
      <div
        onClick={alert}
        style={{ cursor: "pointer", display: "grid", placeItems: "center" }}
      >
        <img src={burger} height={14} alt={"-"} />
      </div>
      <div>Поиск</div> <div>Профиль</div>
    </header>
  );
};
