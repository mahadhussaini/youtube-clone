import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import "./VideoDetail.css";

const API_KEY = "AIzaSyDFoRNjz-ABYqedQt7h0P5bfGBBgEmi61s";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const { videoId } = useParams();

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${API_KEY}`
        );
        const data = await response.json();
        setVideo(data.items[0]);
      } catch (error) {
        console.error("Error fetching video details:", error);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div className="videoDetail">
      <VideoPlayer video={video} />
    </div>
  );
};

export default VideoDetail;
