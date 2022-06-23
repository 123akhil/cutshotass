import { useStepperContext } from "../../contexts/StepperContext";

export default function First() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className="font-semibold text-3xl text-black text-center">
        Welcome! First things first...
      </div>
      <div className="mt-4 mb-6 text-gray-500 text-center text-sm">
        Your can always change them later.
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-7 text-gray-500">
          Full Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["fullname"] || ""}
            name="fullname"
            placeholder="Steve Jobs"
            className="w-full appearance-none p-2 px-2 text-gray-800 text-xs outline-none"
          />
        </div>
      </div>
      <div className="mx-2 w-full flex-1">
        <div className="mt-3 h-6 text-xs font-bold leading-7 text-gray-500">
          Display Name
        </div>
        <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
          <input
            onChange={handleChange}
            value={userData["displayname"] || ""}
            name="displayname"
            placeholder="Steve"
            className="w-full appearance-none p-2 px-2 text-gray-800 outline-none text-xs"
          />
        </div>
      </div>
    </div>
  );
}
