import { Github, Linkedin } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';

const socialLinks = [
  { icon: Github, href: 'https://github.com/chhunhak15/myportfolio-.git', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rous-chhunhak-18583a36a/', label: 'LinkedIn' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-20"
    >
      <div className="text-center max-w-3xl mx-auto opacity-0 animate-fade-in">
        <div className="relative inline-block mb-8">
          <img
            src={profileAvatar}
            alt="Ros Chhunhak"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-card shadow-card animate-float"
          />
          <span className="absolute -top-2 -right-2 text-3xl">👋🏻</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
          Hi, I'm Ros Chhunhak.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-4">
          <span className="font-display italic text-foreground">Junior Web Developer</span>, passionate about building clean web applications.
        </p>
        
        <p className="text-muted-foreground text-lg mb-10">
          Eager to learn new technologies and continuously improve.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
