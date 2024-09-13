export default function Intro() {
  return (
    <div className=" w-full bg-gradient-to-r from-gray-300   via-gray-300 via-50% to-black  to-50%">
      <div className=" w-[60%] mx-auto  py-[200px]   max-3xl:w-[90%] ">
        <div className="flex justify-between  ">
          <span className="text-8xl font-bold font-inte max-sm:text-4xl max-md:text-5xl max-lg:text-7xl">
            Weejan
          </span>
          <span className="text-8xl font-bold font-inter text-gray-300  max-sm:text-4xl max-md:text-5xl max-lg:text-7xl">
            Maharjan
          </span>
        </div>
        <div className="flex  justify-between mt-6 ">
          <span className="text-xl font-normal font-inter max-w-[500px] max-lg:w-[350px] max-1lg:w-[450px] text-left max-sm:text-sm max-lg:text-base max-xl:text-[18px] ">
            He has a smile that lights up any room, making everyone
            feelinstantly at ease.
          </span>
          <span className="text-xl font-normal font-inter text-gray-300 max-w-[500px] max-lg:w-[350px] max-1lg:w-[450px] text-right max-sm:text-sm max-lg:text-base max-xl:text-[18px]  ">
            With a quick wit and an easy laugh, he turns even the most mundane
            moments into memorable ones.
          </span>
        </div>
      </div>
    </div>
  );
}
