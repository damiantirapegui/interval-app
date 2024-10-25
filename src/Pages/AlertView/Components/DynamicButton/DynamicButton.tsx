import React from "react";
import "./DynamicButton.css";

interface DynamicButtonProps {
  showBreak: boolean;
  handleDynamicButton: () => void;
}

// Here we tell the button witch text it should but in our dynamic button.
// We use this button for both the alarm and pause view
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
