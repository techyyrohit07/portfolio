import ProjectCard from "../cards/ProjectCards";

function Projects(){

    const projects = [
    {
      title: "Ride-booking Service",
      description: "Designed and implemented a robust microservices architecture comprising three independent services using Node.js/Express and MongoDB, with inter-service communication enabled via RabbitMQ.",
      link: "https://github.com/techyyrohit07/ride-booking-service",
    },
    {
      title: "URL-Shortener",
      description: "A secure URL shortening service built with Node.js, Express.js, and MongoDB. Features include unique link generation, seamless redirection, and JWT-based authentication with cookie sessions to ensure secure access.",
      link: "https://github.com/techyyrohit07/url-shortener-app",
    },
    {
      title: "Subscription Tracker",
      description: "A subscription management platform with a RESTful API for CRUD operations, JWT authentication, and MongoDB for scalable data storage. Includes rate limiting and bot protection using Arcjet, making it production-ready.",
      link: "https://github.com/techyyrohit07/subscription-tracker",
    },
    
  ];

    return(
        <div id="projects">
            <section className=" w-full mt-20 h-full">
                <h2 className="text-center text-4xl font-extrabold tracking-tight text-teal-400 ">PROJECTS</h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 py-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                ))}
                </div>
            </section>
        </div>
    )
}


export default Projects