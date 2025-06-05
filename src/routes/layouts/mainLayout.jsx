import TopBar from '../../components/topBar/topBar.jsx';
import "./mainLayout.css";

const MainLayout = ({ children }) => {
  return (
    <div className="heroBg">
      <div className="bgMain" />
      <div className="overlay" />
      <div className="gradient" />
      <div className="ellipse" />
      <div className="mainContent">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
