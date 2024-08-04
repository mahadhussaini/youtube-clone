import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = ({ videos }) => {
  return (
    <div className="videoList">
      {videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </div>
  );
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default VideoList;
