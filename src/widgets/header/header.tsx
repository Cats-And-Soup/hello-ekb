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
      <div>Поиск</div>
      <div
        style={{ cursor: "pointer", display: "flex", gap: "5px" }}
        onClick={() => navigate("/profile")}
      >
        <p>{name || "Войти"}</p>
        <img
          style={{ borderRadius: "100%", width: 24 }}
          src={
            "https://crypto.ru/wp-content/plugins/q-auth/assets/img/default-user.png"
          }
          alt={"user"}
        />
      </div>
    </header>
  );
};
