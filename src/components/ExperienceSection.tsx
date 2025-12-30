import { Briefcase, GraduationCap, Code2 } from 'lucide-react';

const experiences = [
  {
    icon: Briefcase,
    title: 'IT Support',
    company: 'Metfone Headquarter',
    period: 'Dec 2020 - Nov 2021',
    description: 'My first-ever job, both in life and in the tech field, was an invaluable experience for me. It served as a platform where I not only gained knowledge about various job aspects but also honed my programming skills during my free time working there.',
  },
  {
    icon: GraduationCap,
    title: 'Developer Internship',
    company: 'Techo Startup Center',
    period: 'Nov 2021 - Feb 2022',
    description: 'In my first developer role, I gained comprehensive knowledge and skills through hands-on experience. One notable project was creating a digital signature proof of concept. I developed both the backend and frontend components, refining my skills and gaining practical experience in building secure software.',
  },
  {
    icon: Code2,
    title: 'Full-stack Developer',
    company: 'Techo Startup Center',
    period: 'Feb 2022 - Present',
    description: 'After a successful internship, I landed a full-stack developer job with diverse projects, including government initiatives. This role offered daily real-world challenges that enhanced my skills and knowledge. Working full-time as a developer fueled my professional growth and expertise in the field.',
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
