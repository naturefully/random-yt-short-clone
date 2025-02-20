
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
];
