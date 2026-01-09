import { Code2, Wrench } from 'lucide-react';

const experiences = [
  {
    icon: Code2,
    title: 'Freelancer',
    company: 'Self-Employed',
    period: 'Present',
    description: 'Working as a freelance web developer, building clean, responsive, and user-friendly web applications for various clients. Continuously learning new technologies and improving my skills through real-world projects.',
  },
  {
    icon: Wrench,
    title: 'IT Support Technician',
    company: 'Technical Support',
    period: 'Previous',
    description: 'Provided basic technical support for computers, laptops, and peripheral devices. Assisted users with software installation, updates, and basic troubleshooting. Diagnosed and resolved common hardware issues (keyboard, mouse, monitor, printer). Helped set up operating systems and user accounts. Supported basic network connectivity issues (Wi-Fi, LAN). Installed and configured common applications. Performed routine system maintenance and backups. Communicated technical issues clearly to non-technical users.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">My Experience</h2>
        
        <div className="relative opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {experiences.map((exp, index) => (
            <div key={exp.title} className="timeline-item">
              <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
