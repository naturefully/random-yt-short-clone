
import { useState } from "react";
import { Video } from "@/data/videos";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface VideoPlayerProps {
  video: Video;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="video-item relative">
      <iframe
        className="w-full h-full"
        src={`${video.url}?autoplay=1&mute=1&controls=0&loop=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      
      <div className="video-overlay">
        <div className="flex justify-between items-end">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">{video.title}</h2>
            <p className="text-sm text-gray-300">{video.creator}</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <button 
              className="action-button"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart 
                className={`w-8 h-8 ${isLiked ? "fill-red-500 text-red-500" : "text-white"}`}
              />
              <span className="action-count">{video.likes}</span>
            </button>

            <button className="action-button">
              <MessageCircle className="w-8 h-8" />
              <span className="action-count">{video.comments}</span>
            </button>

            <button className="action-button">
              <Share2 className="w-8 h-8" />
              <span className="action-count">{video.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
