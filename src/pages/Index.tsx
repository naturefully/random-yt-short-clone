
import { useEffect, useState } from "react";
import { videos } from "@/data/videos";
import { VideoPlayer } from "@/components/VideoPlayer";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const container = e.target as HTMLElement;
      const scrollPosition = container.scrollTop;
      const videoHeight = window.innerHeight;
      const newIndex = Math.round(scrollPosition / videoHeight);
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    const container = document.querySelector(".video-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    toast({
      title: "Welcome to YT Shorts Clone",
      description: "Scroll down to watch more videos!",
      duration: 3000,
    });

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentIndex, toast]);

  return (
    <div className="video-container bg-black">
      {videos.map((video) => (
        <VideoPlayer key={video.id} video={video} />
      ))}
    </div>
  );
};

export default Index;
