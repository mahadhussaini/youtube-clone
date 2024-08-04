import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import "./VideoCard.css";

const VideoCard = ({ title, channel, views, timestamp, image }) => {
  return (
    <Card className="videoCard">
      <CardMedia
        className="videoCard_media"
        image={image}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {channel} • {views} • {timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
