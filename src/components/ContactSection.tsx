import { Mail, Linkedin, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email Me',
    href: 'mailto:chhunhak15@gmail.com',
    description: 'chhunhak15@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/rous-chhunhak-18583a36a/',
    description: 'linkedin.com/in/rous-chhunhak',
  },
  {
    icon: Send,
    label: 'Telegram',
    href: 'https://t.me/ROS_CHHUNHAK',
    description: '@ROS_CHHUNHAK',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 pb-32">
      <div className="max-w-xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Contact Me</h2>
        
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-muted-foreground">
            Feel free to reach out to me through the links below.
          </p>
        </div>
        
        <div className="grid gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                <link.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {link.label}
                </h3>
                <p className="text-muted-foreground text-sm">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Mail className="w-4 h-4" />
            <span>Made with passion by Chhunhak</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
