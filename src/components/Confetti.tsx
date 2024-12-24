import "../styles/Confetti.css";
import React from "react";
import Confetti from "react-confetti";

interface ConfettiComponentProps {
  isActive: boolean; // Prop to control confetti activation
}

const ConfettiComponent: React.FC<ConfettiComponentProps> = ({ isActive }) => {
  return (
    <div>
      {isActive && (
        <Confetti
          width={window.innerWidth - 18}
          height={document.body.scrollHeight}
        />
      )}
    </div>
  );
};

export default ConfettiComponent;
