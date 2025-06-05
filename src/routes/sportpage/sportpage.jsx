import React, { useState } from "react";
import "./sportpage.css";
import SelectTeamStep from "./Step/SelectTeamStep";
import AccountStep from "./Step/AccountStep";

export default function SportFormContainer() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [account, setAccount] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [selectedTeam, setSelectedTeam] = useState(null);

  const handleNextStep1 = (team) => {
    setSelectedTeam(team);
    setStep(2);
  };
  const handleNextStep2 = () => {
    setResult("Chúc mừng! Bạn đã đăng ký thành công."); // hoặc logic thực tế
    setStep(3);
  };
  const handleReset = () => setStep(1);

  return (
    <div class="sportpage-container">
      {step === 1 &&
        <SelectTeamStep
          onNext={handleNextStep1}
        />}
      {step === 2 && (
        <AccountStep
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