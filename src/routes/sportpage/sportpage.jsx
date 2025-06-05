import React, { useState } from "react";
import "./sportpage.css";
import SelectTeamStep from "./Step/SelectTeamStep";
import AccountStep from "./Step/AccountStep";

export default function SportFormContainer() {
  const [step, setStep] = useState(1);
  const [account, setAccount] = useState("");
  const [otp, setOtp] = useState("");

  const handleNextStep1 = (team) => {
    setSelectedTeam(team);
    setStep(2);
  };
  const handleNextStep2 = () => {
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
          onReset={handleReset}
        />
      )}
    </div>
  );
}