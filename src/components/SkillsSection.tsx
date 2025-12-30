const skills = [
  'Blockchain',
  'CSS',
  'Docker',
  'HTML',
  'Java',
  'JavaScript',
  'Kubernetes',
  'Next.js',
  'PostgreSQL',
  'Prisma',
  'React',
  'Solidity',
  'Spring',
  'SvelteKit',
  'TailwindCSS',
  'TypeScript',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Skills</h2>
        
        <div className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="skill-tag"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
