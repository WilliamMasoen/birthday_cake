import "../styles/Confetti.css";
import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

interface ConfettiComponentProps {
  isActive: boolean; // Prop to control confetti activation
}

const ConfettiComponent: React.FC<ConfettiComponentProps> = ({ isActive }) => {
  const { width, height } = useWindowSize();

  return <div>{isActive && <Confetti width={width} height={height} />}</div>;
};

export default ConfettiComponent;
