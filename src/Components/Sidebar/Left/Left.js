import React from "react";
import "./Left.css";
import { Avatar } from "@mui/material";
import { Bookmark, WorkOutline, ExpandMore } from "@mui/icons-material";

const Left = ({ user }) => {
  return (
    <div className="left">
      <div className="leftside">
        <img className="left_image" src={user.photoURL} />
        <Avatar
          className="avatar"
          src={user.photoURL}
          sx={{ width: 68, height: 68 }}
        />
        <div className="profile">
          <h3>{user.displayName}</h3>
          <p>FullStackDeveloper</p>
        </div>

        <div className="view">
          <p>
            Who viewed your profile <span className="views">123</span>{" "}
          </p>
          <p>
            View of your post<span className="views"> 123</span>
          </p>
        </div>
        <div className="detail">
          <p>Access exclusive tools & insights</p>
          <h4>Try Premium Free for 1 Month </h4>
        </div>
        <div className="items">
          <Bookmark />
          <p>My Items</p>
        </div>
      </div>
      <div className="left1">
        <h3>My Pages (3)</h3>
        <div className="pages">
          <Avatar src="https://files.startupranking.com/startup/thumb/1207537_05c779d11c9360c42fc4242f501b977786765f2a_techieegy_l.png" />
          <div className="page_text">
            <h3>TechieeGY</h3>
            <div className="page_notification">
              <p> page notification</p>
              <p className="num">1</p>
            </div>
          </div>
        </div>
        <div className="pages">
          <Avatar src="https://files.startupranking.com/startup/thumb/1207537_05c779d11c9360c42fc4242f501b977786765f2a_techieegy_l.png" />
          <div className="page_text">
            <h3>TechieeGY</h3>
            <div className="page_notification">
              <p> page notification</p>
              <p className="num">1</p>
            </div>
          </div>
        </div>
        <div className="pages">
          <Avatar src="https://files.startupranking.com/startup/thumb/1207537_05c779d11c9360c42fc4242f501b977786765f2a_techieegy_l.png" />
          <div className="page_text">
            <h3>TechieeGY</h3>
            <div className="page_notification">
              <p> page notification</p>
              <p className="num">1</p>
            </div>
          </div>
        </div>
      </div>
      <div className="left2">
        <h4>Recent</h4>
        <div className="work_details">
          <WorkOutline />
          <p>Level Up Your Career by Learning....</p>
        </div>
        <div className="hash">
          <p># arprojectsltd</p>
          <p># arprojectseducations</p>
          <p># arprojects</p>
          <p># machinelearning</p>
        </div>
        <div className="groups">
          <h4>Groups</h4>
          <div className="events">
            <h4>Events</h4>
            <h4>+</h4>
          </div>
          <h4>Followed Hashtags</h4>
        </div>
        <p># arprojectsltd</p>
        <p># arprojectseducations</p>
        <p># arprojects</p>

        <button className="show">
          <h4>Show more</h4>
          <ExpandMore />
        </button>
        <div className="discover">
          <h2>Discover More</h2>
        </div>
      </div>
    </div>
  );
};

export default Left;
