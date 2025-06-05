import React from "react";
import { useNavigate } from "react-router-dom";
import "./ComingSoon.css";

export default function ComingSoon({ title }) {
    const navigate = useNavigate();
    return (
        <div className="loto-container">
            <h2 className="loto-title">{title}</h2>
            <label className="loto-label">
                Tính năng đang phát triển. Hãy cùng Jun88 đón chờ và tham gia các chương trình đang diễn ra nhé!
            </label>
            <button className="loto-btn" onClick={() => navigate("/")}>QUAY VỀ TRANG CHỦ</button>
        </div>
    );
} 