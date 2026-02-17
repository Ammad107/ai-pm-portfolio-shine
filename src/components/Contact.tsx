import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Connect
        </h2>

        <p className="text-base text-muted-foreground mb-10 italic">
          Follow along on my journey, reach out for collaborations, or just say hi.
        </p>

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

export default Contact;
