import profileAvatar from '@/assets/profile-avatar.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">About Me</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={profileAvatar}
                alt="About Chetra"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am a <span className="text-foreground font-medium">Computer Science student</span> with interests in web development and cybersecurity. 
              I am building practical skills as a <span className="text-primary font-medium">junior web developer</span> while developing a strong foundation in system and application security.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              {['Problem Solver', 'Fast Learner', 'Team Player'].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
