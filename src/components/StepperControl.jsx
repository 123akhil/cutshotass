export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container flex items-center justify-center ml-2">
      {/* <button
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-slate-300 bg-white py-2 px-4 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white  ${
          currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""
        }`}
      >
        Back
      </button> */}

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-violet-600 py-4 text-white text-xs transition duration-200 ease-in-out hover:bg-slate-700 hover:text-white w-[90%]"
      >
        {/* {currentStep === steps.length - 1 ? "Launch Eden" : "Create Workspace"} */}
        Create Workspace
      </button>
    </div>
  );
}
