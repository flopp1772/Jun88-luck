import { Outlet } from "react-router";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div className="heroBg">
      <div className="bgMain" />
      <div className="overlay" />
      <div className="gradient" />
      <div className="ellipse" />
      <div className="mainContent">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
