import "./header.css";
import burger from "../../shared/assets/burger.svg";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";

export const Header = () => {
  const { name } = useAuthStore();
  return (
    <header className={"header"}>
      <div
        onClick={alert}
        style={{ cursor: "pointer", display: "grid", placeItems: "center" }}
      >
        <img src={burger} height={14} alt={"-"} />
      </div>
      <div>Поиск</div>{" "}
      <div style={{ cursor: "pointer" }}>{name || "Профиль"}</div>
    </header>
  );
};
