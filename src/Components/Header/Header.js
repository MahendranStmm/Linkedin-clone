import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import {
  Home,
  Search,
  Work,
  Message,
  Notifications,
  Group,
  MotionPhotosAuto,
  Apps,
} from "@mui/icons-material";

const Header = ({ user }) => {
  console.log(user);

  return (
    <div className="header">
      <div className="header__right">
        <img
          className="linkedin"
          src="https://static.vecteezy.com/system/resources/previews/009/097/186/original/blue-color-white-background-linkedin-design-logo-sign-symbol-free-vector.jpg"
          alt="logo"
        />
        <div className="input">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__left">
        <div className="icons">
          <Home className="home" />
          <p>Home</p>
        </div>
        <div className="icons">
          <Group />
          <p>MyNetwork</p>
        </div>
        <div className="icons">
          <Work />
          <p>job</p>
        </div>
        <div className="icons">
          <Message />
          <p>Message</p>
        </div>
        <div className="icons">
          <Notifications />
          <p>Notification</p>
        </div>
        <div className="icons">
          <Avatar src={user.photoURL} />
          <p>Me</p>
        </div>
        <div className="icons">
          <Apps />
          <p>Work</p>
        </div>
        <div className="icons">
          <MotionPhotosAuto />
          <p>Advertise</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
