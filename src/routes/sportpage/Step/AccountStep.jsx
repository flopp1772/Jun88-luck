import React from "react";
import OtpInput from 'react-otp-input';

export default function AccountStep({ account, setAccount, otp, setOtp, onNext }) {
    const handleOtpChange = (value) => {
        const numericValue = value.replace(/\D/g, '').slice(0, 4);
        setOtp(numericValue);
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
            <button className="form1-btn" onClick={onNext}>KIỂM TRA</button>
        </>
    );
}