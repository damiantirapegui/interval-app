import React from "react";
import "./DynamicButton.css";

interface DynamicButtonProps {
  showBreak: boolean;
  handleDynamicButton: () => void;
}

export const DynamicButton: React.FC<DynamicButtonProps> = ({
  showBreak,
  handleDynamicButton,
}) => {
  return (
    <>
      <div className="button-alert-container">
        <button type="button" className="button" onClick={handleDynamicButton}>
          {showBreak ? "NO PUASE, GO NOW" : "SET NEW TIMER"}
        </button>
      </div>
    </>
  );
};
