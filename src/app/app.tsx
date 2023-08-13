import { Routes, Route } from "react-router-dom";
import { Schedule } from "../pages/schedule/schedule.tsx";
import { Profile } from "../pages/profile/profile.tsx";
import { MapList } from "../pages/list/mapList.tsx";
import { Main } from "../pages/main/main.tsx";
import "./app.css";
import { Header } from "../widgets/header/header.tsx";
import { SignUp } from "../pages/sign-up/sign-up.tsx";
import { SignIn } from "../pages/sign-in/sign-in.tsx";
import { useBurgerStore } from "../shared/stores/burger-store.tsx";
import { useEffect } from "react";
import { useAuthStore } from "../shared/stores/auth-store.tsx";
import axios, { AxiosResponse } from "axios";
import { BurgerMenu } from "../widgets/menu/menu.tsx";
import { Search } from "../pages/search/search.tsx";
import { useEvents } from "../shared/fetch-hook/use-events.tsx";
import { EventPage } from "../pages/event-page/event-page.tsx";
import { useFavorites } from "../shared/fetch-hook/use-favorites.tsx";

export function App() {
  const { isOpened, setIsOpened } = useBurgerStore();
  const { token, setName, setToken, setId, invalidate } = useAuthStore();
  useEvents();
  useFavorites();
  useEffect(() => {
    if (token) {
      axios
        .post<
          string,
          AxiosResponse<{ access_token: string; name: string; id: string }>
        >("http://100.76.84.25:8000/api/v1/refresh", token, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setToken(res.data.access_token);
          setName(res.data.name);
          setId(res.data.id);
        })
        .catch(() => invalidate());
    }
  }, [token, setToken, setName, setId]);

  return (
    <main
      className={"page-wrapper"}
      style={{ overflow: isOpened ? "hidden" : "visible" }}
    >
      <Header />
      {isOpened && <BurgerMenu />}
      {isOpened && (
        <div className={"overlay"} onClick={() => setIsOpened(false)}></div>
      )}
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/map-list"} element={<MapList />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/schedule"} element={<Schedule />} />
        <Route path={"/search"} element={<Search />} />
        <Route path={"/event/:id"} element={<EventPage />} />
      </Routes>
    </main>
  );
}
