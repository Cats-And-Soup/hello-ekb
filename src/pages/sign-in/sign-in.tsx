import { Input } from "../../shared/ui/input.tsx";
import { useState, useEffect } from "react";
import { Button } from "../../shared/ui/button.tsx";
import axios, { AxiosResponse } from "axios";
import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useNavigate } from "react-router";
import "./sign-in.css";

export const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { token, setToken, setId, setName } = useAuthStore();

  const signIn = () => {
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
          onChange={setPassword}
        />
        <Button width={"80%"} onClick={() => signIn()}>
          Войти
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
          Зарегестрироваться
        </p>
      </div>
    </div>
  );
};
