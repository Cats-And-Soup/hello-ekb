import { create } from "zustand";

type BurgerStore = {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
};

export const useBurgerStore = create<BurgerStore>((set) => ({
  isOpened: false,
  setIsOpened: (isOpened) => set({ isOpened }),
}));
