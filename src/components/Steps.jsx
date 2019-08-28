import React from "react";
import className from "classnames";

const Steps = props => {
  const { steps } = props;
  return steps.map((step, i) => {
    return (
      <div
        key={i}
        className={className("step col", {
          "is-active": steps[i].isActive,
          "is-completed": steps[i].isCompleted
        })}
      >
        <div className="step__index">{i + 1}</div>
        <div className="step__title">{step.name}</div>
      </div>
    );
  });
};
export default Steps;
