import "../styles/Confetti.css";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ConfettiComponent: React.FC = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const { width, height } = useWindowSize();

  const toggleConfetti = () => {
    setIsConfettiActive(!isConfettiActive);
  };

  return (
    <div>
      <button className="confetti-button" onClick={toggleConfetti}>
        <span>{isConfettiActive ? "Stop Confetti" : "Start Confetti"}</span>
      </button>
      {isConfettiActive && <Confetti width={width} height={height} />}
    </div>
  );
};

export default ConfettiComponent;
