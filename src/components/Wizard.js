import React, { useState } from "react";
import { Step, Result } from "./";

export const Wizard = ({ initialState }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState(initialState);

  const step = formState[currentStep];
  const isLastStep = () => currentStep === Object.keys(initialState).length;

  const handleChange = evt => {
    const { value } = evt.target;
    setFormState({
      ...formState,
      [currentStep]: { ...formState[currentStep], value }
    });
    console.log(formState);
  };

  const handleClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep + 1);
  };
  if (isLastStep()) {
    return <Result formState={formState} />;
  }
  return (
    <form>
      <div>
        <Step
          step={step}
          currentStep={currentStep}
          handleChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Next</button>
      </div>
    </form>
  );
};
