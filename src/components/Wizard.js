import React, { useState } from "react";
import { Step, Result } from "./";

export const Wizard = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState([]);
  const [value, setValue] = useState("");

  const step = steps[currentStep];
  const isLastStep = () => currentStep === Object.keys(steps).length;

  const handleChange = evt => {
    const { value } = evt.target;
    setValue(value);
  };

  const handleClick = evt => {
    evt.preventDefault();
    setCurrentStep(currentStep => currentStep + 1);
    setValues([...values, value]);
    setValue("");
  };
  if (isLastStep()) {
    return <Result steps={steps} values={values} />;
  }
  return (
    <form>
      <div>
        <Step
          step={step}
          currentStep={currentStep}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>Next</button>
      </div>
    </form>
  );
};
