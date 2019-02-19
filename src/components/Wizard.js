import React, { useState } from "react";
import { Step, Result } from "./";

export const Wizard = ({ initialState }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState(initialState);

  const step = formState[currentStep];
  const isLastStep = () => currentStep === Object.keys(initialState).length;
  const isFirstStep = () => currentStep === 0;

  const handleChange = evt => {
    const { value } = evt.target;
    setFormState({
      ...formState,
      [currentStep]: { ...formState[currentStep], value }
    });
  };

  const handleBackClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep - 1);
  };

  const handleNextClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep + 1);
  };

  const isLast = isLastStep();
  const isFirst = isFirstStep();

  return (
    <form>
      <div>
        {isLast ? (
          <Result formState={formState} />
        ) : (
          <Step
            step={step}
            currentStep={currentStep}
            handleChange={handleChange}
          />
        )}
      </div>
      <div>
        {!isFirst && <button onClick={handleBackClick}>&lt; Back</button>}
        {!isLast && <button onClick={handleNextClick}>Next &gt;</button>}
      </div>
    </form>
  );
};
