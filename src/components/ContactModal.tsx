import { useState } from "react";
import { X, Send, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please agree to the payment terms before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual SMTP integration)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send the form data to your backend
      console.log("Form submitted:", formData);
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });

      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: "", email: "", description: "", consent: false });
        setIsSubmitted(false);
        onClose();
      }, 3000);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl border border-border/50 animate-fade-in-up">
        {isSubmitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. I'll review your project details and get back to you within 24 hours.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <h2 className="text-xl font-semibold text-foreground">Contact Me</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                  Real Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="description" className="text-sm font-medium text-foreground">
                  Project Description *
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your project, requirements, timeline, and budget expectations..."
                  rows={5}
                  required
                  className="mt-1 resize-none"
                />
              </div>

              <div className="flex items-start space-x-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleInputChange("consent", checked as boolean)}
                      className="mt-1"
                    />
                    <Label 
                      htmlFor="consent" 
                      className="text-sm text-amber-800 leading-relaxed cursor-pointer"
                    >
                      I understand that payment must be made after the work is completed. 
                      Failure to comply may result in legal action. *
                    </Label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="gradient-button w-full"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.description || !formData.consent}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to be contacted regarding your project inquiry.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;