
export interface Video {
  id: string;
  url: string;
  title: string;
  creator: string;
  likes: number;
  comments: number;
  shares: number;
}

export const videos: Video[] = [
  {
    id: "1",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Never Gonna Give You Up",
    creator: "@rickastley",
    likes: 42000,
    comments: 1200,
    shares: 890,
  },
  {
    id: "2",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw",
    title: "Me at the zoo",
    creator: "@jawed",
    likes: 12000,
    comments: 450,
    shares: 230,
  },
  {
    id: "3",
    url: "https://www.youtube.com/embed/4N3N1MlvVc4",
    title: "Mad World",
    creator: "@tearsForFears",
    likes: 28000,
    comments: 890,
    shares: 560,
  },
  {
    id: "4",
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
    title: "PSY - GANGNAM STYLE",
    creator: "@psy",
    likes: 245000,
    comments: 15600,
    shares: 8900,
  },
  {
    id: "5",
    url: "https://www.youtube.com/embed/XqZsoesa55w",
    title: "Baby Shark Dance",
    creator: "@pinkfong",
    likes: 156000,
    comments: 7800,
    shares: 4500,
  },
  {
    id: "6",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    title: "Despacito",
    creator: "@luisfonsi",
    likes: 189000,
    comments: 9400,
    shares: 6700,
  },
  {
    id: "7",
    url: "https://www.youtube.com/embed/JGwWNGJdvx8",
    title: "Shape of You",
    creator: "@edsheeran",
    likes: 167000,
    comments: 8300,
    shares: 5200,
  },
  {
    id: "8",
    url: "https://www.youtube.com/embed/CevxZvSJLk8",
    title: "Roar",
    creator: "@katyperry",
    likes: 145000,
    comments: 7200,
    shares: 4100,
  }
];
