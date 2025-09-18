import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Advanced Game Mechanics",
      category: "Roblox Scripting",
      description: "Complex combat system with skill trees, progression mechanics, and real-time multiplayer synchronization.",
      image: "/placeholder.svg",
      tags: ["Lua", "RemoteEvents", "DataStore"]
    },
    {
      id: 2,
      title: "Modern UI Dashboard",
      category: "UI Design",
      description: "Sleek inventory management system with drag-and-drop functionality and smooth animations.",
      image: "/placeholder.svg",
      tags: ["TweenService", "UserInput", "Responsive"]
    },
    {
      id: 3,
      title: "Cinematic Story Sequence",
      category: "Cutscenes",
      description: "Epic opening cutscene with camera movements, lighting effects, and synchronized audio.",
      image: "/placeholder.svg",
      tags: ["CameraManipulation", "Lighting", "Audio"]
    },
    {
      id: 4,
      title: "Professional Portfolio",
      category: "Web Development",
      description: "Responsive portfolio website built with modern web technologies and smooth animations.",
      image: "/placeholder.svg",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "Trading System",
      category: "Game Systems",
      description: "Secure player-to-player trading system with verification and transaction logging.",
      image: "/placeholder.svg",
      tags: ["Security", "DataStore", "UI"]
    },
    {
      id: 6,
      title: "Bio Link Website",
      category: "Web Development",
      description: "Clean, minimalist bio website with social links and contact integration.",
      image: "/placeholder.svg",
      tags: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of Roblox projects, UI designs, and web development work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={item.id} 
              className="portfolio-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;