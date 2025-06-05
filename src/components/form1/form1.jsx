import React, { useState } from "react";
import "./form1.css";

import ResponsiveDatePicker from "../CenteredDatePicker/CenteredDatePicker";

export default function Form1() {
    const [date, setDate] = useState(null);
    return (
        <div className="form1-container">
            <h2 className="form1-title">DỰ ĐOÁN MAY MẮN</h2>
            <label className="form1-label" htmlFor="date">Chọn ngày</label>
            <div className="form1-input-group">
                <ResponsiveDatePicker
                    value={date}
                    onChange={(newDate) => setDate(newDate)}
                />
            </div>
            <button className="form1-btn">ĐĂNG KÝ</button>
        </div>
    );
}