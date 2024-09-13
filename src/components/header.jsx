export default function Header() {
  return (
    <>
      <nav className="bg-transparent">
        <div className="mx-auto w-full h-16 flex justify-between items-center bg-gradient-to-r from-gray-300   via-gray-300 via-50% to-black to-50% px-[80px] max-md:px-[5%]">
          <span className=" text-3xl font-medium font-inter max-md:text-xl">
            Wizzy.
          </span>
          <a
            href="#contact"
            id="contactBtn"
            className=" text-2xl font-medium font-inter  text-gray-300 max-md:text-lg"
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}
