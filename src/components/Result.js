import React from "react";

export const Result = ({ steps, values }) => {
  return (
    <ul>
      {Object.keys(steps).map(item => {
        return (
          <li key={item}>
            Qu. {+item + 1} {steps[item].label} - {values[item]}
          </li>
        );
      })}
    </ul>
  );
};
