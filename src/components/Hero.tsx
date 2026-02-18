import { Mail, Linkedin, Github, Download } from "lucide-react";
import profilePhoto from "@/assets/ammad-profile.jpeg";

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-background pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center animate-fade-in">
        {/* Profile Photo */}
        <div className="w-28 h-28 rounded-full border-2 border-border mx-auto mb-8 overflow-hidden">
          <img src={profilePhoto} alt="Ammad Sattar" className="w-full h-full object-cover" />
        </div>

        <h1
          className="text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
        >
          Ammad Sattar
        </h1>

        <p className="text-lg text-muted-foreground mb-4">
          AI Product Manager & Consultant
        </p>

        <p className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10 italic">
          Building AI-powered workflows that reduce manual workload by 40% and increase qualified leads by 25%. 
          Bridging the gap between cutting-edge AI technology and real-world business solutions.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com/in/ammad-sattar"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:ammadsattar52107@gmail.com"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="/Ammad_Sattar_Resume.pdf"
            download="Ammad_Sattar_Resume.pdf"
            className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            <Download size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
