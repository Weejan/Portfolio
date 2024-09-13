export default function Project({ project }) {
  let image = project.image;
  return (
    <div className="h-[400px] w-[500px] border border-slate-300 p-4 text-center grid grid-rows-subgrid">
      <div className="h-[50%] overflow-hidden">
        <img src={image} alt={project.name} />
      </div>
      <div>
        <span className=" text-gray-300">{project.name}</span>
      </div>
      <div>
        <span className=" text-gray-300">{project.desc}</span>
      </div>
      <div>
        <button className=" text-gray-300">View More</button>
      </div>
    </div>
  );
}
