import React, { useState } from "react";
import OtpInput from 'react-otp-input';

export default function AccountStep({ account, setAccount, otp, setOtp, onReset }) {
    const [loading, setLoading] = useState(false);

    const handleOtpChange = (value) => {
        const numericValue = value.replace(/\D/g, '').slice(0, 4);
        setOtp(numericValue);
    };

    const handleCheck = async () => {
        if (!account || otp.length !== 4) {
            alert("Vui lòng nhập đầy đủ tài khoản và 4 số cuối.");
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(`https://api-client-game-k36.attcloud.org/api/game-lucky-lottery/check-account?account=${encodeURIComponent(account)}&lastBankNumber=${encodeURIComponent(otp)}`);
            const data = await res.json();
            if (data.isSuccess) {
                alert("Tài khoản hợp lệ! Bạn có thể tiếp tục.");
            } else {
                alert(data.message || "Tài khoản không đủ điều kiện tham gia.");
            }
        } catch (e) {
            alert("Có lỗi xảy ra, vui lòng thử lại.");
        }
        setLoading(false);
    };

    return (
        <>
            <h2 className="sportpage-title">DỰ ĐOÁN THỂ THAO</h2>
            <label className="form1-label" htmlFor="account">Tài khoản</label>
            <div className="form1-input-group">
                <input
                    id="account"
                    className="form1-input"
                    value={account}
                    onChange={e => setAccount(e.target.value)}
                    placeholder="Nhập tài khoản"
                />
            </div>
            <label className="form1-label" htmlFor="otp">4 số cuối tài khoản ngân hàng</label>
            <div className="form1-input-group">
                <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={4}
                    inputStyle={{
                        width: '3rem',
                        height: '3rem',
                        margin: '0 0.25rem',
                        fontSize: '1.5rem',
                        borderRadius: '6px',
                        border: '1px solid #25ABE0',
                        textAlign: 'center',
                        background: '#fff',
                        outline: 'none',
                        transition: 'border 0.2s',
                    }}
                    renderInput={(props) => <input {...props} className="otp-input-custom" />}
                />
            </div>
            <button className="sportpage-btn" onClick={handleCheck} disabled={loading}>
                {loading ? "ĐANG KIỂM TRA..." : "KIỂM TRA"}
            </button>
        </>
    );
}