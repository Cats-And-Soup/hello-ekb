import { useEffect } from "react";
import axios from "axios";
import { useFavsStore } from "../stores/favs-store.tsx";
import { useAuthStore } from "../stores/auth-store.tsx";

export const useFavorites = () => {
  const { setFavorites } = useFavsStore();
  const { id } = useAuthStore();
  useEffect(() => {
    if (!id) return;
    axios
      .get(`http://100.76.84.25:8000/api/v1/favorites?user_id=${id}`)
      .then((res) => {
        setFavorites(
          res.data.map((item: { event_id: number }) => item.event_id),
        );
      });
  }, [id, setFavorites]);
};
