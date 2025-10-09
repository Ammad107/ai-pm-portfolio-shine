import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Download } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Greeting Section */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-light">
              Hello
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              I'm <span className="bg-gradient-hero bg-clip-text text-transparent">Ammad</span>
            </h1>
          </div>

          {/* Professional Title */}
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-foreground mb-6 leading-relaxed">
              AI Product Manager & Innovation Leader
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              A passionate full-stack developer crafting beautiful and functional web experiences. 
              Specializing in building AI-powered workflows that <span className="text-blue-primary font-medium">reduce manual workload by 40%</span> and 
              <span className="text-green-accent font-medium">increase qualified leads by 25%</span>. 
              I bridge the gap between cutting-edge AI technology and real-world business solutions.
            </p>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-hero hover:opacity-90 text-white px-8 py-4 text-lg font-medium shadow-professional hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Work Together
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a
                href="https://linkedin.com/in/ammad-sattar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View LinkedIn
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              asChild
              className="text-muted-foreground hover:text-foreground px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <a
                href="/Ammad_Sattar_Resume.docx"
                download="Ammad_Sattar_Resume.docx"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Success Metrics Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center p-6 rounded-lg bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Workload Reduction</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-green-accent mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Creators Enabled</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-card hover:shadow-card transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-blue-primary mb-2">25%</div>
              <div className="text-sm text-muted-foreground">Lead Increase</div>
            </div>
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