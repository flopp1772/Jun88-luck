import React, { useState } from "react";
import "./luckpage.css";
import ResponsiveDatePicker from "../../components/CenteredDatePicker/CenteredDatePicker";
import DateStep from "./Step/DateStep";
import AccountStep from "./Step/AccountStep";
import LuckyResult from "./Step/LuckyResult";

export default function LuckyFormContainer() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState(null);
  const [account, setAccount] = useState("");
  const [otp, setOtp] = useState("");
  const [result, setResult] = useState("");
  const [numberLottery, setNumberLottery] = useState("");
  const [depositId, setDepositId] = useState("");
  const [withdrawId, setWithdrawId] = useState("");

  const handleNextAccount = () => setStep(2);
  const handleNextDate = () => {
    // setResult("Chúc mừng! Bạn đã đăng ký thành công."); // hoặc logic thực tế
    setStep(3);
  };
  const handleReset = () => setStep(1);

  return (
    <div className="form1-container">
      {step === 1 && (
        <AccountStep
          account={account}
          setAccount={setAccount}
          otp={otp}
          setOtp={setOtp}
          onNext={handleNextAccount}
        />
      )}
      {step === 2 && (
        <DateStep
          date={date}
          setDate={setDate}
          account={account}
          otp={otp}
          onNext={handleNextDate}
          setNumberLottery={setNumberLottery}
          setDepositId={setDepositId}
          setWithdrawId={setWithdrawId}
        />
      )}
      {step === 3 && <LuckyResult result={result} onReset={handleReset} numberLottery={numberLottery} depositId={depositId} withdrawId={withdrawId} />}
    </div>
  );
}