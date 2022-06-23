import { useStepperContext } from "../../contexts/StepperContext";
export default function Final() {
 const { userData } = useStepperContext();
  return (
    <div className="container md:mt-4">
      <div className="flex flex-col items-center">
        <img alt="" src={process.env.PUBLIC_URL+ '/images/tick.png'} width={75} height={75} className="" />
        <div className="mt-4 font-semibold text-3xl text-black text-center">
          Congratulations, Eren!
        </div>
        <div className="text-md my-4 text-gray-400 text-center">
          Your have completed onboarding, you can start using Eden!
        </div>
        <a className="mt-4 w-full" href="/user/dashboard">
          <button className="cursor-pointer rounded-lg bg-violet-600 py-4 text-white text-xs transition duration-200 ease-in-out hover:bg-violet-700 hover:text-white w-[92%] ml-4" onClick={(e)=> {e.preventDefault();
    console.log(userData)}}>
            Launch Eden
          </button>
        </a>
      </div>
    </div>
  );
}
