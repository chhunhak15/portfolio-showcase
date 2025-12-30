import { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-4 pb-32">
      <div className="max-w-xl mx-auto">
        <h2 className="section-title opacity-0 animate-fade-in">Contact Me</h2>
        
        <div className="text-center mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <p className="text-muted-foreground">
            Feel free to reach out to me at{' '}
            <a
              href="mailto:contact@chetraseng.com"
              className="text-primary hover:underline font-medium"
            >
              contact@chetraseng.com
            </a>
            {' '}or through the form below.
          </p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-2xl p-8 shadow-card space-y-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-background border-border focus:ring-primary"
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-background border-border focus:ring-primary"
            />
          </div>
          
          <div>
            <Textarea
              placeholder="Your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={5}
              className="bg-background border-border focus:ring-primary resize-none"
            />
          </div>
          
          <Button type="submit" className="w-full gap-2">
            <Send className="w-4 h-4" />
            Send Message
          </Button>
        </form>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground text-sm">
            <Mail className="w-4 h-4" />
            <span>Made with passion by Chetra</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
