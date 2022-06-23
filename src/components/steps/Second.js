import { useStepperContext } from "../../contexts/StepperContext";

export default function Second() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <div className="font-semibold text-2xl text-black text-center">
        Let's set up a home for all your work
      </div>
      <div className="text-md mt-4 mb-6 text-gray-500 text-center text-sm">
        Your can always create another workspace later.
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-7">
          Workspace Name
        </div>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["workspace"] || ""}
            name="workspace"
            placeholder="Eden"
            className="p-2 px-2 appearance-none outline-none w-full text-gray-800 text-xs"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-7">
          Workspace URL{" "}
          <span className="text-gray-300 font-semibold text-xs">
            (optianal)
          </span>
        </div>
        <div className="bg-white my-2 p-2 flex border border-gray-200 rounded text-xs">
          <input
            onChange={handleChange}
            value={userData["workurl"] || ""}
            name="workurl"
            placeholder="Example"
            type="Email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
