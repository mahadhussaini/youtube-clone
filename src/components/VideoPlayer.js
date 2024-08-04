import React from "react";
import PropTypes from "prop-types";
import "./VideoPlayer.css";

const VideoPlayer = ({ video }) => {
  if (!video) return null;

  const { snippet } = video;
  const videoSrc = `https://www.youtube.com/embed/${video.id}`;

  return (
    <div className="videoPlayer">
      <iframe
        title="YouTube video player"
        className="videoPlayer_frame"
        src={videoSrc}
        allowFullScreen
      />
      <h3>{snippet.title}</h3>
    </div>
  );
};

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoPlayer;
