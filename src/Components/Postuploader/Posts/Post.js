import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";

const Post = ({ profilepic, message, timestamp, username, image }) => {
  return (
    <div className="posts">
      <div className="post_avatar">
        <Avatar src={profilepic} />
        <div className="username">
          <p>{username}</p>
          <p>{new Date(timestamp?.toDate()).toDateString()}</p>
        </div>
      </div>
      <div className="more">
        <MoreHoriz />
      </div>
      <div className="message">
        <p>{message}</p>
      </div>
      <div className="post_image">
        <img src={image} />
      </div>
      <div className="comment">
        <div>
          <p>Like</p>
        </div>
        <div>
          <p>Comments</p>
        </div>
        <div>
          <p>Share</p>
        </div>
        <div>
          <p>Send</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
