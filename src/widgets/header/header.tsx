import "./header.css";
import burger from "../../shared/assets/burger.svg";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useBurgerStore } from "../../shared/stores/burger-store.tsx";
import { useNavigate } from "react-router";

export const Header = () => {
  const { name } = useAuthStore();
  const { setIsOpened } = useBurgerStore();
  const navigate = useNavigate();
  return (
    <header className={"header"}>
      <div
        onClick={() => setIsOpened(true)}
        style={{ cursor: "pointer", display: "grid", placeItems: "center" }}
      >
        <img src={burger} height={14} alt={"-"} />
      </div>
      <div>Поиск</div>{" "}
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/profile")}>
        {name || "Войти"}
      </div>
    </header>
  );
};
