import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoList from "../components/VideoList";
import "./SearchResults.css";

const API_KEY = "AIzaSyDFoRNjz-ABYqedQt7h0P5bfGBBgEmi61s";

const SearchResults = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error("Error fetching the videos:", error);
      });
  }, [searchTerm]);

  return (
    <div className="searchResults">
      <VideoList videos={videos} />
    </div>
  );
};

export default SearchResults;
