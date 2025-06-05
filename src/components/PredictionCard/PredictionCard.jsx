import React from "react";
import "./PredictionCard.css";
import LuckPredict from "../../assets/card/LuckPredict.png";

const PredictionCard = ({
    title = "DỰ ĐOÁN MAY MẮN",
    status = "Đang diễn ra",
    imageSrc = LuckPredict,
    isActive = true,
    onClick = () => { },
}) => {
    return (
        <div className="prediction-card">
            <img src={imageSrc} alt="prediction-image" className="prediction-image" />
            <div className="over">
                <div className={`ongoing-row ${isActive ? 'ongoing-active' : 'ongoing-inactive'}`}>
                    <span className="ongoing-text">{status}</span>
                </div>

                {isActive ? <ActiveSVG /> : <InactiveSVG />}
            </div>
            <button className="prediction-mcp-btn" onClick={onClick} disabled={!isActive}>{title}</button>
        </div>
    );
};

const ActiveSVG = () => (
    <svg
        className="ongoing-svg-bg"
        width="111"
        height="10"
        viewBox="0 0 111 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M19.3198 9.50777L0 0.0012207H110.092L90.7722 9.50777H19.3198Z"
            fill="url(#paint0_linear_6_54)"
            fillOpacity="0.8"
        />
        <defs>
            <linearGradient id="paint0_linear_6_54" x1="55.046" y1="0.0012207" x2="55.046" y2="9.50777" gradientUnits="userSpaceOnUse">
                <stop stopColor="#25ABE0" />
                <stop offset="1" stopColor="#25ABE0" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);

const InactiveSVG = () => (
    <svg
        className="ongoing-svg-bg"
        width="111"
        height="10"
        viewBox="0 0 111 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M19.3198 9.50777L0 0.0012207H110.092L90.7722 9.50777H19.3198Z"
            fill="url(#paint0_linear_6_54_inactive)"
            fillOpacity="0.8"
        />
        <defs>
            <linearGradient id="paint0_linear_6_54_inactive" x1="55.046" y1="0.0012207" x2="55.046" y2="9.50777" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F37021" />
                <stop offset="1" stopColor="#F37021" stopOpacity="0" />
            </linearGradient>
        </defs>
    </svg>
);


export default PredictionCard;
