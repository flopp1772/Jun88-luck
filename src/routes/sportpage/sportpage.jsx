import React, { useState } from "react";
import "./sportpage.css";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";

export default function SportFormContainer() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [account, setAccount] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");

  const handleNextStep1 = () => setStep(2);
  const handleNextStep2 = () => {
    setResult("Chúc mừng! Bạn đã đăng ký thành công."); // hoặc logic thực tế
    setStep(3);
  };
  const handleReset = () => setStep(1);

  return (
    <div className="form1-container">
      {step === 1 && <Step1 date={date} setDate={setDate} onNext={handleNextStep1} />}
      {step === 2 && (
        <Step2
          account={account}
          setAccount={setAccount}
          otp={otp}
          setOtp={setOtp}
          onNext={handleNextStep2}
        />
      )}
      {step === 3 && <Step3 result={result} onReset={handleReset} />}
    </div>
  );
}