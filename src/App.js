import { useState } from "react";
import Stepper from "./components/Stepper";
import StepperControl from "./components/StepperControl";
import { UseContextProvider } from "./contexts/StepperContext";

import First from "./components/steps/First";
import Second from "./components/steps/Second";
import Third from "./components/steps/Third";
import Final from "./components/steps/Final";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["first", "second", "third", "fourth"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <First />;
      case 2:
        return <Second />;
      case 3:
        return <Third />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center h-screen sm:w-2/3 lg:w-1/3">
      {/* header */}
      <div className="flex items-center">
        <img
          alt=""
          src={process.env.PUBLIC_URL + "/images/icon.png"}
          width={50}
          height={50}
          className=""
        />
        <h1 className="font-bold text-2xl">Eden</h1>
      </div>
      {/* Stepper */}
      <div className="container mt-8 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="mt-8 p-6 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </div>
  );
}

export default App;
