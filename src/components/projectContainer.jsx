import Project from "./project";

export default function ProjectContainer() {
  let projectDetails = [
    {
      image: "../img/bonsaiKojo.png",
      name: "Bonsai Kojo",
      desc: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quasi amet quae dolores nulla reiciendis eius dolorum, accusamus ex quia cupiditate officiis animi nesciunt incidunt perspiciatis culpa officia non consectetur.",
      link: "https://weejan.github.io/Bonsai-Kojo/",
    },
    {
      image: "../img/blogCard.png",
      name: "Blog Card",
      desc: "This is the decripiton",
      link: "https://weejan.github.io/blog-card/",
    },
    {
      image: "../img/landingPage.png",
      name: "Landing Page",
      desc: "This is the decripiton",
      link: "https://weejan.github.io/Landing-page/",
    },
    {
      image: "../img/recipeApp.png",
      name: "Recipe App",
      desc: "This is the decripiton",
      link: "https://weejan.github.io/Recipe-App/",
    },
    {
      image: "../img/todoList.png",
      name: "Todo List",
      desc: "This is the decripiton",
      link: "https://weejan.github.io/Todo-List/",
    },
  ];
  return (
    <div className="bg-black pb-16">
      <div className="text-gray-300 text-6xl max-xl:text-5xl max-md:text-4xl font-semibold text-center py-16 ">
        Projects
      </div>
      <div className="grid grid-cols-3 gap-10 place-items-center max-3xl:grid-cols-2 max-1md:grid-cols-1 pb-16">
        {projectDetails.map((project, key) => {
          console.log(project, key);
          return <Project project={project} key={key} />;
        })}
      </div>
    </div>
  );
}
