import React from "react";
import "./Right.css";
import { ExpandMore, ArrowRightAlt, LinkedIn } from "@mui/icons-material";

const Right = () => {
  return (
    <div className="right_sidebar">
      <div className="linkednews">
        <div className="header">
          <h4>LinkedIn News</h4>
        </div>
        <ul>
          <li>Game on, says Zoom</li>
          <p>14th ago . 22,444 readers</p>
          <li>It's raining jobs in Indian IT</li>
          <p>3d ago . 4343 readers</p>
          <li>Millennials new wealth-creation tools</li>
          <p>1hr ago . 12323 readers</p>
          <li>World is your (remote work) oyster</li>
          <p>1hr ago . 3432 readers</p>
          <li>Did remote work save introverts ?</li>
          <p>14hr ago . 3432 readers</p>
        </ul>
        <div className="right_showmore">
          <h4>Show more</h4>
          <ExpandMore />
        </div>
      </div>
      <div className="top_courses">
        <div className="course">
          <h4>Today's top courses</h4>
        </div>
        <ul>
          <li>Creativity at Work: A Short Course from ...</li>
          <p>Seth Godin</p>
          <li>Customer Service Foundations</li>
          <p>Jeff Toister</p>
          <li>Creating Positive Conversations with C...</li>
          <p>Myra Golden</p>
        </ul>
        <div className="showmore1">
          <h4>Show more on Linkedin Learning</h4>
          <ArrowRightAlt />
        </div>
      </div>
      <div className="addvertise">
        <img src="https://brand.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/og-social-share-image.jpg" />
        <div className="about">
          <p>About</p>
          <p>Accessibility</p>
          <p>Help Center</p>
        </div>
        <div className="privacy">
          <div className="terms">
            <p>Privacy & Terms</p>
            <ExpandMore />
          </div>
          <p>Ad Choices</p>
        </div>
        <div className="add">
          <p>Advertising</p>
          <div>
            <p>Business Services</p>
            <ExpandMore />
          </div>
        </div>
        <div className="linkedin_app">
          <p>Get the LinkedIn app</p>
          <p>More</p>
        </div>
        <div className="last">
          <h4>Linked</h4>
          <LinkedIn fontSize="small" />
          <p>LinkedIn Corporation &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
};

export default Right;
