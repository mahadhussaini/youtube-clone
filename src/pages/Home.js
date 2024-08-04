import React, { useState, useEffect } from "react";
import VideoList from "../components/VideoList";
import "./Home.css";

const API_KEY = "AIzaSyDFoRNjz-ABYqedQt7h0P5bfGBBgEmi61s";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=20&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching the videos:", error);
      });
  }, []);

  return (
    <div className="home">
      <VideoList videos={videos} />
    </div>
  );
};

export default Home;
