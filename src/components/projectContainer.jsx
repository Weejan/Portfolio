import Project from "./project";

export default function ProjectContainer() {
  let projectDetails = [
    {
      image: "../img/bonsaiKojo.png",
      name: "Bonsai Kojo",
      desc: "This is the decripiton",
    },
    {
      image: "../img/blogCard.png",
      name: "Blog Card",
      desc: "This is the decripiton",
    },
    {
      image: "../img/landingPage.png",
      name: "Landing Page",
      desc: "This is the decripiton",
    },
    {
      image: "../img/recipeApp.png",
      name: "Recipe App",
      desc: "This is the decripiton",
    },
    {
      image: "../img/todoList.png",
      name: "Todo List",
      desc: "This is the decripiton",
    },
  ];
  return (
    <div className="bg-black">
      <div className="text-gray-300 text-6xl font-semibold text-center py-16 ">
        Projects
      </div>
      <div className="grid grid-cols-3 gap-8 place-items-center ">
        {projectDetails.map((project, key) => {
          console.log(project, key);
          return <Project project={project} key={key} />;
        })}
      </div>
    </div>
  );
}
