import { useStepperContext } from "../../contexts/StepperContext";

export default function Third() {
  const { userData, setUserData } = useStepperContext();
  return (
    <div className="flex flex-col ">
      <div className="font-semibold text-2xl text-black text-center">
        How are you planning to use Eden?
      </div>
      <div className="text-md mt-4 mb-6 text-gray-500 text-center text-sm">
        We'll streamline your setup experience accordingly.
      </div>
      <div className="w-full mx-2 flex items-center justify-between">
        <div
          className={`border border-gray-200 rounded-md w-[46%] hover:border-violet-500 cursor-pointer ${
            userData.TypeofMembership === "single"
              ? "border-violet-500"
              : "border-gray-200"
          }`}
          onClick={() =>
            setUserData({ ...userData, TypeofMembership: "single" })
          }
        >
          <div className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 my-5 mx-3 ${
                userData.TypeofMembership === "single" ? "text-violet-500" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <div className="sm:m-4">
              <h1 className="font-bold text-md my-2">For myself</h1>
              <p className="text-sm text-gray-400 sm:pr-1">
                Write better. Think more clearly. stay organized
              </p>
            </div>
          </div>
        </div>
        <div
          className={`border border-gray-200 rounded-md w-[46%] hover:border-violet-500 cursor-pointer ${
            userData.TypeofMembership === "Team"
              ? "border-violet-500"
              : "border-gray-200"
          }`}
          onClick={() => setUserData({ ...userData, TypeofMembership: "Team" })}
        >
          <div className="m-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 my-5 mx-3 ${
                userData.TypeofMembership === "Team" ? "text-violet-500" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <div className="sm:m-4">
              <h1 className="font-bold text-md my-2">With team</h1>
              <p className="text-sm text-gray-400">
                Wikis, docs, tasks & projects, all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
