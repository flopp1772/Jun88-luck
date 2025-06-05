import React, { useState } from "react";
import ResponsiveDatePicker from "../../../components/CenteredDatePicker/CenteredDatePicker";

export default function DateStep({ date, setDate, account, otp, onNext }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleClaim = async () => {
        setError("");
        if (!date) {
            setError("Vui lòng chọn ngày.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch('https://api-client-game-k36.attcloud.org/api/game-lucky-lottery/claim-reward', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userName: account,
                    lastBankNumber: otp,
                    date: date && date.format ? date.format('YYYY-MM-DD') : date // format nếu là dayjs
                })
            });
            const data = await res.json();
            if (data.isSuccess) {
                onNext();
            } else {
                setError(data.message || "Có lỗi xảy ra.");
                alert(data.message || "Có lỗi xảy ra.");
            }
        } catch (e) {
            setError("Có lỗi xảy ra, vui lòng thử lại.");
        }
        setLoading(false);
    };

    return (
        <>
            <h2 className="form1-title">DỰ ĐOÁN MAY MẮN</h2>
            <label className="form1-label" htmlFor="date">Chọn ngày</label>
            <div className="form1-input-group">
                <ResponsiveDatePicker value={date} onChange={setDate} />
            </div>
            {error && <div className="form1-label" style={{ color: '#dc3545', marginBottom: 8 }}>{error}</div>}
            <button className="form1-btn" onClick={handleClaim} disabled={loading}>
                {loading ? "ĐANG GỬI..." : "ĐĂNG KÝ"}
            </button>
        </>
    );
}