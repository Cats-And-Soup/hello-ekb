import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthStore = {
  token: string | null;
  id: string | null;
  name: string | null;
  setToken: (token: string) => void;
  setId: (id: string) => void;
  setName: (name: string) => void;

  invalidate: () => void;
};

export const useAuthStore = create(
  persist<AuthStore>(
    (set) => ({
      token: null,
      id: null,
      name: null,
      setToken: (token: string) => set(() => ({ token })),
      setId: (id: string) => set(() => ({ id })),
      setName: (name: string) => set(() => ({ name })),
      invalidate: () => set(() => ({ token: null, id: null, name: null })),
    }),
    { name: "auth" },
  ),
);
