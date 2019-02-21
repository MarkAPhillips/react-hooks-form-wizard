import React from "react";

export const Result = ({ formState }) => {
  return (
    <ul>
      {Object.keys(formState).map(item => {
        const { label, value } = formState[item];
        return (
          <li key={item}>
            Qu {item} {label} - {value}
          </li>
        );
      })}
    </ul>
  );
};
