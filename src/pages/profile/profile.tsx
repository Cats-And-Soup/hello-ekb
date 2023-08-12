import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useEffect, useState } from "react";
import { IUser } from "../../shared/types/user.ts";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router";
import { Button } from "../../shared/ui/button.tsx";

export const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { token, invalidate } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get<IUser>("http://100.76.84.25:8000/api/v1/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => setIsLoading(false));
  }, [token]);

  useEffect(() => {
    if (!user && isLoading === false) {
      navigate("/sign-in");
    }
  }, [isLoading, user]);

  if (!user && !isLoading) {
    return (
      <div className={"profile-wrapper"}>
        <p style={{ color: "red" }}>Пользователь не найден</p>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className={"profile-wrapper"}>
        <p style={{ color: "gray" }}>Загрузка</p>
      </div>
    );
  }
  return (
    <div className={"profile-wrapper"}>
      <div>
        <p>Имя пользователя</p>
        <h3>{user?.name}</h3>
      </div>
      <div>
        <p>Email пользователя</p>
        <h3>{user?.email}</h3>
      </div>
      <Button
        width={"100px"}
        onClick={() => {
          invalidate();
          navigate("/sign-in");
        }}
      >
        Выйти
      </Button>
    </div>
  );
};
