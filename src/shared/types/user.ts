export interface IUser {
  id: string;
  username: string;
  email: string;
  avatar: string;
}

export const DefaultUser: IUser = {
  id: "123921",
  username: "Konstaphy",
  email: "Konstaphy@gmail.com",
  avatar:
    "https://crypto.ru/wp-content/plugins/q-auth/assets/img/default-user.png",
};
