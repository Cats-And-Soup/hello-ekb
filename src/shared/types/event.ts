export interface IEvent {
  title: string;
  description?: string;
  date: string;
  time: string;
  price: number;
  image: string;
}

export const DefaultEvents: IEvent[] = [
  {
    title: "Pharaoh",
    description: "премьера нового альбома в Tele-Club",
    date: "8 сентября",
    time: "18:00",
    price: 1000000,
    image:
      "https://sportishka.com/uploads/posts/2022-11/1667550932_49-sportishka-com-p-mashina-faraona-pinterest-50.jpg",
  },
  {
    title:
      "S1mple проиграл алкашу из падика 1 на 1 и прошел в полуфинал по поеданию водяры за 5 минут",
    description: "Событие года",
    date: "30 августа",
    time: "18:00",
    price: 0,
    image: "https://cq-esports.com/storage/uploads/posts/1406813/1.jpg",
  },
];
