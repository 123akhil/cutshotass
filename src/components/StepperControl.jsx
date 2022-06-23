export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container flex items-center justify-center ml-2">
      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-lg bg-violet-600 py-4 text-white text-xs transition duration-200 ease-in-out hover:bg-violet-700 hover:text-white w-[90%]"
      >
        Create Workspace
      </button>
    </div>
  );
}
