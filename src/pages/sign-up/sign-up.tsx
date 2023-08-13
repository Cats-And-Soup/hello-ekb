import { useNavigate } from "react-router";
import { Button } from "../../shared/ui/button.tsx";
import { Input } from "../../shared/ui/input.tsx";
import { useState, useEffect } from "react";
import Cat from "../../shared/assets/acatwithoutsoup.png";
import "./sign-up.css";
import axios, { AxiosResponse } from "axios";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";

const validate = (username: string, password: string, email: string) => {
  if (username.length < 4) {
    throw new Error("Имя пользователя слишком короткое");
  }
  if (password.length < 6) {
    throw new Error("Пароль слишком короткий");
  }

  if (email.length < 5 || !email.includes("@")) {
    throw new Error("Введите корректный email");
  }
};

export const SignUp = () => {
  const navigate = useNavigate();

  const [error, setError] = useState<null | string>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const { token, setToken, setId, setName } = useAuthStore();

  const signUp = () => {
    try {
      validate(username, password, email);
    } catch (e: unknown) {
      if (e instanceof Error) {
        setError(e.message);
      }
      return;
    }
    axios
      .post<
        { password: string; name: string; email: string },
        AxiosResponse<{ access_token: string; id: number; name: string }>
      >("http://100.76.84.25:8000/api/v1/users/create", {
        password,
        name: username,
        email,
      })
      .then((res) => {
        setToken(res.data.access_token);
        setId(res.data.id.toString());
        setName(res.data.name);
        navigate("/");
      })
      .catch((e) => {
        setError(
          e.response.data.detail?.[0]?.msg ||
            e.message ||
            "Произошла ошибка при регистрации",
        );
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

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
          type={"password"}
          placeholder={"Пароль"}
          onChange={setPassword}
          className="sign-up-input"
        />
        <Button width={"80%"} onClick={() => signUp()}>
          Зарегестрироваться
        </Button>
        {error && <p style={{ color: "red", width: "300px" }}>{error}</p>}
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
