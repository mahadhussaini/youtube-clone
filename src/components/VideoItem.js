import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./VideoItem.css";

const VideoItem = ({ video }) => {
  const { id, snippet } = video;
  const { title, channelTitle, publishedAt } = snippet;

  return (
    <div className="videoItem">
      <Link to={`/video/${id}`}>
        <img src={snippet.thumbnails.medium.url} alt={title} />
      </Link>
      <div className="videoItem_info">
        <Link to={`/video/${id}`}>
          <h4>{title}</h4>
        </Link>
        <p>
          {channelTitle} • {publishedAt}
        </p>
      </div>
    </div>
  );
};

VideoItem.propTypes = {
  video: PropTypes.object.isRequired,
};

export default VideoItem;
