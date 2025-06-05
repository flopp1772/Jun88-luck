import React from "react";
import { useNavigate } from "react-router-dom";
import "./topBar.css";
import logo from "../../assets/icon/logo.png";
import content from "../../assets/icon/content.png";

const TopBar = () => {
  const navigate = useNavigate();
  return (
    <div className="topBar">
      <img
        src={logo}
        alt="Logo"
        className="topBar-logo"
        style={{ cursor: 'pointer' }}
        onClick={() => navigate("/")}
      />
      <img src={content} alt="Header Content" className="topBar-content" />
    </div>
  );
};

export default TopBar;
