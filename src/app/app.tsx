import { Routes, Route } from "react-router-dom";
import { Schedule } from "../pages/schedule/schedule.tsx";
import { Profile } from "../pages/profile/profile.tsx";
import { MapList } from "../pages/list/mapList.tsx";
import { Main } from "../pages/main/main.tsx";
import "./app.css";
import { Header } from "../widgets/header/header.tsx";
import { SignUp } from "../pages/sign-up/sign-up.tsx";
import { SignIn } from "../pages/sign-in.tsx";

export function App() {
  return (
    <main className={"page-wrapper"}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/map-list"} element={<MapList />} />
        <Route path={"/sign-up"} element={<SignUp />} />
        <Route path={"/sign-in"} element={<SignIn />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/schedule"} element={<Schedule />} />
      </Routes>
    </main>
  );
}
