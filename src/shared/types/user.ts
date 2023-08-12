export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export const DefaultUser: IUser = {
  id: "123921",
  name: "Konstaphy",
  email: "Konstaphy@gmail.com",
  avatar:
    "https://crypto.ru/wp-content/plugins/q-auth/assets/img/default-user.png",
};
