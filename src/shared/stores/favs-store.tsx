import { create } from "zustand";

type FavsStore = {
  favorites: number[];
  setFavorites: (favorites: number[]) => void;
};

export const useFavsStore = create<FavsStore>((set) => ({
  favorites: [],
  setFavorites: (favorites) => set(() => ({ favorites })),
}));
