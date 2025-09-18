import { Code, Palette, Video, Globe } from "lucide-react";
import avatarImage from "@/assets/rangesaki-avatar.png";

const HeroSection = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <img 
              src={avatarImage} 
              alt="RangeSaki Avatar" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-elegant border-4 border-primary/20"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">
              RangeSaki
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Professional Roblox scripter specializing in UI design, cutscenes, game systems, and modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="portfolio-card text-center animate-slide-in-left" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Roblox Scripting</h3>
            <p className="text-muted-foreground text-sm">
              Expert Lua scripting for game mechanics, systems, and interactive experiences
            </p>
          </div>

          <div className="portfolio-card text-center animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">UI Design</h3>
            <p className="text-muted-foreground text-sm">
              Beautiful, intuitive user interfaces that enhance player experience
            </p>
          </div>

          <div className="portfolio-card text-center animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Cutscenes</h3>
            <p className="text-muted-foreground text-sm">
              Cinematic sequences and animations that captivate players
            </p>
          </div>

          <div className="portfolio-card text-center animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Web Development</h3>
            <p className="text-muted-foreground text-sm">
              Modern websites, portfolios, and bio pages with responsive design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;