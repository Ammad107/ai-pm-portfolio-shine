import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-secondary to-background pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            AI Product Manager
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-primary font-medium mb-8">
            Ammad Sattar
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Driving innovation at the intersection of AI and product strategy. 
            Experienced in building AI-powered workflows, leading cross-functional teams, 
            and delivering products that scale from prototype to millions of users.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-primary hover:bg-blue-primary/90 text-white px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white px-8 py-3"
            >
              <a
                href="https://linkedin.com/in/ammad-sattar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;