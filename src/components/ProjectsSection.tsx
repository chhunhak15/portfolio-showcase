import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';

const projects = [
  {
    title: 'CamDL KYC Portal',
    description: 'CamDL Hybrid Permissioned Blockchain Registration Portal is a cutting-edge platform developed using Next.js and Chakra UI. The project incorporates the utilization of smart contracts written in Solidity.',
    tags: ['React', 'Next.js', 'Prisma'],
    image: project1,
  },
  {
    title: "Chetra's Home Chores",
    description: 'The First SvelteKit personal project is a web app that helps individuals manage and view their home chores schedule. It integrates with Notion for easy data access and updates.',
    tags: ['SvelteKit', 'TailwindCSS'],
    image: project2,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-10 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
