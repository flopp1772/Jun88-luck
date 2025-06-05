import React, { useState, useEffect } from 'react';
import './Step3.css';

export default function Step3({ result, onReset }) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState({
        transactionId: 'Đang tải...', // Giá trị mặc định khi đang tải
        luckyCode: 'Đang tải...',   // Giá trị mặc định khi đang tải
    });

    // Giả lập hàm gọi API
    const fetchPredictionData = async () => {
        setLoading(true);
        setError(null);
        try {
            // Giả lập độ trễ của API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Đây là nơi bạn sẽ thực hiện API call thực tế
            // Ví dụ: const response = await fetch('YOUR_API_ENDPOINT');
            // const result = await response.json();

            // Dữ liệu giả lập
            const mockData = {
                id_nap_rut_hop_le: 'c7cced46-babc-4cbc-80d8-491d0b368627',
                ma_so_may_man: '68626',
            };

            setData({
                transactionId: mockData.id_nap_rut_hop_le,
                luckyCode: mockData.ma_so_may_man,
            });
            setLoading(false);
        } catch (err) {
            setError('Không thể tải dữ liệu. Vui lòng thử lại.');
            setLoading(false);
            console.error("API call error:", err);
            // Đặt lại dữ liệu về trạng thái lỗi hoặc rỗng
            setData({
                transactionId: 'Lỗi tải dữ liệu',
                luckyCode: 'Lỗi tải dữ liệu',
            });
        }
    };

    useEffect(() => {
        fetchPredictionData(); // Gọi API khi component được mount
    }, []); // [] đảm bảo chỉ chạy một lần khi component mount

    const handleTransferClick = () => {
        // Logic khi nút "CHUYỂN MÃ ID" được click
        alert('Nút "CHUYỂN MÃ ID" đã được click!');
        // Bạn có thể thêm logic để copy ID, chuyển hướng, hoặc gửi dữ liệu đi
    };

    return (
        <>
            <h2 className="form1-title">DỰ ĐOÁN MAY MẮN</h2>
            <div className="info-section">
                <p className="form1-label">ID nạp / rút hợp lệ của quý khách</p>
                {loading ? (
                    <p className="value loading-text">Đang tải...</p>
                ) : error ? (
                    <p className="value error-text">{error}</p>
                ) : (
                    <p className="value">{data.transactionId}</p>
                )}
            </div>
            <div className="info-section">
                <p className="form1-label">Mã số may mắn</p>
                {loading ? (
                    <p className="value loading-text">Đang tải...</p>
                ) : error ? (
                    <p className="value error-text">{error}</p>
                ) : (
                    <p className="value">{data.luckyCode}</p>
                )}
            </div>
            <button className="form1-btn" onClick={onReset}>CHUYỂN MÃ ID</button>
        </>
    );
}