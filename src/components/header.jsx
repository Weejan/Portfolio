export default function Header() {
  return (
    <>
      <nav className="bg-transparent">
        <div className="mx-auto w-full h-16 flex justify-between items-center bg-gradient-to-r from-gray-200   via-gray-200 via-50% to-black to-50% px-[80px]">
          <span className=" text-3xl font-medium font-inter">Wizzy.</span>
          <span className=" text-2xl font-medium font-inter  text-slate-100">
            Contact
          </span>
        </div>
      </nav>
      <div className="h-[870px] w-full bg-gradient-to-r from-gray-200   via-gray-200 via-50% to-black to-50%">
        <div className="flex flex-wrap w-[60%] mx-auto justify-around">
          <span className="text-8xl font-bold font-inter">Weejan</span>
          <span className="text-8xl font-bold font-inter text-gray-200">
            Maharjan
          </span>
        </div>
      </div>
    </>
  );
}
