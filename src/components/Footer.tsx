import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Links", href: "#links" },
  ];

  return (
    <footer className="bg-white/50 border-t border-border/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">RangeSaki</h3>
            <p className="text-muted-foreground text-sm">
              Professional Roblox scripter and web developer creating amazing digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
            <p className="text-muted-foreground text-sm mb-2">
              Ready to start your project?
            </p>
            <p className="text-primary font-medium text-sm">
              Use the contact form above!
            </p>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} RangeSaki. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and professional expertise.</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            All rights reserved. Professional Roblox scripting and web development services.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;