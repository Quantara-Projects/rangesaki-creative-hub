import { ExternalLink, MessageCircle, Briefcase, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ExternalLinksSection = () => {
  const links = [
    {
      name: "Fiverr",
      description: "Hire me for professional projects and custom commissions",
      icon: Briefcase,
      url: "https://www.fiverr.com/users/ram_magdalaga/",
      available: true,
      color: "bg-green-500"
    },
    {
      name: "LinkedIn",
      description: "Connect with me on professional network",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ram-mitchell-magdalaga-919188385",
      available: true,
      color: "bg-blue-600"
    },
    {
      name: "Discord",
      description: "Direct communication and quick support",
      icon: MessageCircle,
      url: "#",
      available: false,
      color: "bg-indigo-500",
      username: "@rangesaki"
    }
  ];

  return (
    <section id="links" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Find me on these platforms for projects, networking, and quick communication
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <div 
                key={link.name}
                className="portfolio-card text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${link.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {link.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {link.description}
                </p>
                
                {link.available ? (
                  <Button 
                    className="gradient-button w-full"
                    onClick={() => window.open(link.url, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit {link.name}
                  </Button>
                ) : link.username ? (
                  <div className="text-center p-3 bg-accent/50 rounded-lg border">
                    <p className="text-foreground font-semibold text-lg">
                      {link.username}
                    </p>
                    <p className="text-muted-foreground text-xs mt-1">
                      Add me on Discord
                    </p>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Prefer Email?
          </h3>
          <p className="text-muted-foreground mb-4">
            Use the contact form above for detailed project inquiries and I'll get back to you within 24 hours!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExternalLinksSection;