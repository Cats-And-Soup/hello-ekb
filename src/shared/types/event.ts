export interface IEvent {
  id: string;
  title: string;
  description?: string;
  start_datetime: string;
  end_datetime: string;
  lon: string;
  lat: string;
  price: number;
  address?: string;
  image_src: string;
  tags: string[];
}

export const DefaultEvents: IEvent[] = [
  {
    id: "1",
    tags: ["tranding", "18+"],
    title: "Pharaoh",
    description: "премьера нового альбома в Tele-Club",
    start_datetime: "13/08/2023",
    end_datetime: "13/08/2023",
    lat: "56",
    lon: "60",
    price: 1000000,
    image_src:
      "https://sportishka.com/uploads/posts/2022-11/1667550932_49-sportishka-com-p-mashina-faraona-pinterest-50.jpg",
  },
  {
    id: "2",
    tags: ["tranding", "18+"],
    title: "Pharaoh",
    description: "премьера нового альбома в Tele-Club",
    start_datetime: "13/08/2023",
    end_datetime: "13/08/2023",
    lat: "56",
    lon: "60",
    price: 1000000,
    image_src:
      "https://sportishka.com/uploads/posts/2022-11/1667550932_49-sportishka-com-p-mashina-faraona-pinterest-50.jpg",
  },
];
