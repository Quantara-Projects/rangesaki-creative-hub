import { Check, Code, Palette, Video, Settings, Globe, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Roblox Scripting",
      description: "Professional Lua scripting for games, mechanics, and systems",
      features: [
        "Combat & Movement Systems",
        "Data Management & Storage",
        "Multiplayer Synchronization",
        "Performance Optimization",
        "Custom Game Mechanics"
      ],
      price: "Starting at $50"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, functional interfaces that enhance user experience",
      features: [
        "Modern Interface Design",
        "Responsive Layouts",
        "Animation & Transitions",
        "User Experience Planning",
        "Mobile-Friendly Design"
      ],
      price: "Starting at $30"
    },
    {
      icon: Video,
      title: "Cutscenes & Animation",
      description: "Cinematic sequences and smooth animations for your game",
      features: [
        "Camera Cinematography",
        "Character Animations",
        "Environmental Effects",
        "Audio Synchronization",
        "Story Integration"
      ],
      price: "Starting at $75"
    },
    {
      icon: Settings,
      title: "Game Systems",
      description: "Complex game mechanics and backend systems development",
      features: [
        "Economy & Trading Systems",
        "Progression & Leveling",
        "Admin & Moderation Tools",
        "Analytics Integration",
        "Security Implementation"
      ],
      price: "Starting at $100"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern websites and web applications",
      features: [
        "Portfolio Websites",
        "Bio Link Pages",
        "Responsive Design",
        "SEO Optimization",
        "Contact Integration"
      ],
      price: "Starting at $200"
    },
    {
      icon: Smartphone,
      title: "Consultation",
      description: "Expert advice and project planning for your ideas",
      features: [
        "Project Planning",
        "Technical Consultation",
        "Code Review",
        "Architecture Design",
        "Best Practices Guidance"
      ],
      price: "Starting at $25/hour"
    }
  ];

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Services Offered
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional development services tailored to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.title}
                className="portfolio-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border/50">
                  <p className="text-lg font-semibold text-primary">{service.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your specific requirements!
          </p>
          <p className="text-sm text-muted-foreground">
            All prices are starting estimates. Final cost depends on project complexity and requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;