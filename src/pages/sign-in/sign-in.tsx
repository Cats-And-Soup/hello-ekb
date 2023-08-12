import { Input } from "../../shared/ui/input.tsx";
import { useState, useEffect } from "react";
import { Button } from "../../shared/ui/button.tsx";
import axios, { AxiosResponse } from "axios";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useNavigate } from "react-router";
import "./sign-in.css";

const validate = (username: string, password: string) => {
  if (username.length < 4) {
    throw new Error("Имя пользователя слишком короткое");
  }
  if (password.length < 6) {
    throw new Error("Пароль слишком короткий");
  }
};

export const SignIn = () => {
  const [error, setError] = useState<string | null>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { token, setToken, setId, setName } = useAuthStore();

  useEffect(() => {
    setError(null);
  }, [username, password]);

  const signIn = () => {
    try {
      validate(username, password);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
      return;
    }

    axios
      .post<
        { username: string; password: string },
        AxiosResponse<{ access_token: string; id: number; name: string }>
      >("http://100.76.84.25:8000/api/v1/login", {
        username,
        password,
      })
      .then((res) => {
        setToken(res.data.access_token);
        setId(res.data.id.toString());
        setName(res.data.name);
        navigate("/");
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div className={"sign-in-page"}>
      <div className="sign-in-form">
        <h3>Войти</h3>
        <Input
          width={"80%"}
          onChange={setUsername}
          value={username}
          placeholder={"Имя пользователя"}
        />
        <Input
          value={password}
          width={"80%"}
          placeholder={"Пароль"}
          type={"password"}
          onChange={setPassword}
        />
        <Button width={"80%"} onClick={() => signIn()}>
          Войти
        </Button>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <p
          onClick={() => navigate("/sign-in")}
          style={{
            color: "gray",
            fontSize: "14px",
            textAlign: "center",
            width: "80%",
          }}
        >
          Зарегестрироваться
        </p>
      </div>
    </div>
  );
};
