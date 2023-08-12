import { useAuthStore } from "../../shared/stores/auth-store.tsx";
import { useEffect, useState } from "react";
import { IUser } from "../../shared/types/user.ts";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router";

export const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const { token } = useAuthStore();
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
      <h3>Имя пользователя</h3>
      <p>{user?.name}</p>
      <h3>Email пользователя</h3>
      <p>{user?.email}</p>
    </div>
  );
};
