import './homepage.css'
import PredictionCard from '../../components/PredictionCard/PredictionCard'
import LuckPredict from "../../assets/card/LuckPredict.png";
import SportPredict from "../../assets/card/SportPredict.png";
import LottoPredict from "../../assets/card/LottoPredict.png";
import AmbPredict from "../../assets/card/AmbPredict.png";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      title: "DỰ ĐOÁN MAY MẮN",
      status: "Đang diễn ra",
      imageSrc: LuckPredict,
      isActive: true,
      onClick: () => navigate('/luckpage'),
    },
    {
      title: "DỰ ĐOÁN THỂ THAO",
      status: "Đang diễn ra",
      imageSrc: SportPredict,
      isActive: true,
      onClick: () => navigate('/sportpage'),
    },
    {
      title: "DỰ ĐOÁN SỔ XỐ",
      status: "Chưa kích hoạt",
      imageSrc: LottoPredict,
      isActive: false,
      onClick: () => navigate('/luckpage'),
    },
    {
      title: "DỰ ĐOÁN ĐẠI SỨ",
      status: "Chưa kích hoạt",
      imageSrc: AmbPredict,
      isActive: false,
      onClick: () => navigate('/luckpage'),
    },
  ];

  return (
    <div className="homepage-container">
      {cardData.map((card, idx) => (
        <PredictionCard key={idx} {...card} />
      ))}
    </div>
  )
}

export default Homepage