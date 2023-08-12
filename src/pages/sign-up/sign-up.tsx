import { useNavigate } from "react-router";
import { Button } from "../../shared/ui/button.tsx";
import { Input } from "../../shared/ui/input.tsx";
import { useState } from "react";
import Cat from "../../shared/assets/acatwithoutsoup.png";
import "./sign-up.css";
import axios from "axios";

export const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = () => {
    axios
      .post<{ password: string; name: string; email: string }>(
        "http://100.76.84.25:8000/api/v1/users/create",
        {
          password,
          name: username,
          email,
        },
      )
      .then(() => navigate("/"));
  };

  return (
    <div className={"sign-up-page"}>
      <div className="sign-up-form">
        <h2>Регистрация</h2>
        <Input
          width={"80%"}
          onChange={setUsername}
          value={username}
          placeholder={"Имя пользователя"}
          className="sign-up-input"
        />
        <Input
          width={"80%"}
          value={email}
          onChange={setEmail}
          placeholder={"Email"}
          className="sign-up-input"
        />
        <Input
          value={password}
          width={"80%"}
          placeholder={"Пароль"}
          onChange={setPassword}
          className="sign-up-input"
        />
        <Button width={"80%"} onClick={() => signUp()}>
          Зарегестрироваться
        </Button>
        <p
          onClick={() => navigate("/sign-in")}
          style={{
            color: "gray",
            fontSize: "14px",
            textAlign: "center",
            width: "80%",
          }}
        >
          У меня уже есть аккаунт
        </p>
      </div>
      <div className="sign-up-notification">
        <div className="notification">
          <div>
            Регистрация необязательна, но так будет удобнее пользоваться
            сервисом, Вы сможете добавлять интересные события в избранное,
            составлять собственный календарь событий
          </div>
        </div>
        <div></div>
        <div></div>
        <div>
          <img src={Cat} alt={"cat"} />
        </div>
      </div>
    </div>
  );
};
