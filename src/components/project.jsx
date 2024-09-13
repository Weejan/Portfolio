export default function Project({ project }) {
  let image = project.image;
  return (
    <div className="h-[400px] w-[500px] max-3xl:w-[400px] border border-slate-300 p-4 text-center grid grid-rows-subgrid row-span-4 hover:scale-105 transition-all">
      <div className=" overflow-hidden  h-[300px] w-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={project.name}
        />
      </div>
      <div>
        <span className=" text-3xl font-medium text-gray-300 ">
          {project.name}
        </span>
      </div>
      <div>
        <span className=" text-lg text-gray-300  ">{project.desc}</span>
      </div>
      <div className="mb-2">
        <a
          href={project.link}
          target={"_blank"}
          rel="noopener noreferrer"
          className=" border-2 py-3 px-6 text-gray-300 relative z-10 bg-transparent hover:scale-105   hover:bg-white hover:text-black hover:font-medium "
        >
          View More
        </a>
      </div>
    </div>
  );
}
