function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between">
      
      <div>
        <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
        <p className="text-gray-400 mb-4 text-center break-all">{description}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 text-center"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;
