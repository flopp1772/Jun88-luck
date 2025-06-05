import React from 'react';
import './Step3.css';

export default function Step3({ numberLottery, depositId, withdrawId, onReset }) {
    return (
        <>
            <h2 className="form1-title">DỰ ĐOÁN MAY MẮN</h2>
            <div className="info-section">
                <p className="form1-label">ID nạp hợp lệ của quý khách</p>
                <p className="value">{depositId || 'Không có dữ liệu'}</p>
            </div>
            <div className="info-section">
                <p className="form1-label">ID rút hợp lệ của quý khách</p>
                <p className="value">{withdrawId || 'Không có dữ liệu'}</p>
            </div>
            <div className="info-section">
                <p className="form1-label">Mã số may mắn</p>
                <p className="value">{numberLottery || 'Không có dữ liệu'}</p>
            </div>
            <button className="form1-btn" onClick={onReset}>CHUYỂN MÃ ID</button>
        </>
    );
}