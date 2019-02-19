import React from "react";

export const Step = ({ step, handleChange, currentStep }) => {
  const { label, value } = step;
  const inputId = `input-${currentStep}`;
  const question = `Qu ${currentStep + 1}. ${label}?`;
  return (
    <>
      <label htmlFor={inputId}>{question}</label>
      <input
        id={inputId}
        type="text"
        value={value}
        onChange={handleChange}
        required
      />
    </>
  );
};
