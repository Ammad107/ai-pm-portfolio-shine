import { ArrowRight } from "lucide-react";

const stats = [
  { num: "40", sup: "%", label: "Manual Workload Reduced Through AI Workflows" },
  { num: "25", sup: "%", label: "Increase in Qualified Leads Delivered" },
  { num: "30", sup: "s", label: "Idea-to-PRD Generation With AI PRD Studio" },
  { num: "10", sup: "+", label: "AI Products, Dashboards & PRDs Shipped" },
];

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-32 pb-20">
      <div className="max-w-[1080px] w-full mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center animate-fade-in">
          <div>
            <p className="section-label">AI Product Manager &amp; Consultant</p>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
            >
              Ammad
              <br />
              <em className="italic text-primary">Sattar</em>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-[1.8] max-w-[460px] mb-10">
              I build AI-native products and workflows that turn messy inputs into
              decisions — reducing manual work by 40% and increasing qualified leads
              by 25%. Answers, not just dashboards.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <button
                onClick={() => scrollTo("#projects")}
                className="btn-cta bg-foreground text-background hover:bg-primary hover:text-primary-foreground"
              >
                View My Work <ArrowRight size={14} />
              </button>
              <a
                href="https://linkedin.com/in/ammad-sattar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta border-[1.5px] border-border text-foreground hover:border-primary hover:text-primary"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-[3px]">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`bg-secondary hover:bg-accent transition-colors px-6 py-8 ${
                  i === 0 ? "rounded-tl-xl" : i === 1 ? "rounded-tr-xl" : i === 2 ? "rounded-bl-xl" : "rounded-br-xl"
                }`}
              >
                <div
                  className="text-4xl sm:text-5xl text-primary leading-none mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {s.num}
                  <sup className="text-xl">{s.sup}</sup>
                </div>
                <div className="text-[0.8rem] font-medium text-muted-foreground leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
