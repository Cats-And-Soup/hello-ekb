import "./header.css";
import burger from "../../shared/assets/burger.svg";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useBurgerStore } from "../../shared/stores/burger-store.tsx";
import { useNavigate, useMatch } from "react-router";
import Lupa from "../../shared/assets/lupa.png";

export const Header = () => {
  const { name } = useAuthStore();
  const { setIsOpened } = useBurgerStore();
  const navigate = useNavigate();
  const isSearchRoute = useMatch("/search");
  return (
    <header className={"header"}>
      <div
        onClick={() => setIsOpened(true)}
        style={{ cursor: "pointer", display: "grid", placeItems: "center" }}
      >
        <img src={burger} height={14} alt={"-"} />
      </div>
      <div className="placeholder"></div>
      <div
        style={{
          display: isSearchRoute ? "none" : "flex",
          alignItems: "center",
          gap: "5px",
          borderRadius: "12px",
          padding: "5px 25px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/search")}
      >
        <img alt={"lupa"} height={18} src={Lupa} />
      </div>
      <div
        style={{
          cursor: "pointer",
          display: "flex",
          gap: "5px",
          alignItems: "center",
        }}
        onClick={() => navigate("/profile")}
      >
        <p>{name || "Войти"}</p>
        {name && (
          <img
            style={{ borderRadius: "100%", width: 24, height: 24 }}
            src={
              "https://crypto.ru/wp-content/plugins/q-auth/assets/img/default-user.png"
            }
            alt={"user"}
          />
        )}
      </div>
    </header>
  );
};
