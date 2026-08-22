import profilePhoto from "@/assets/ammad-profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.45fr] gap-16 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <img
              src={profilePhoto}
              alt="Ammad Sattar, AI Product Manager"
              className="w-full rounded-2xl object-cover aspect-[4/5] mb-8"
              loading="lazy"
            />
            <p className="section-label">About Me</p>
            <h2 className="section-title mb-6">
              AI-native product thinking. Human-centered outcomes.
            </h2>
            <blockquote className="border-l-2 border-primary pl-5 italic text-muted-foreground">
              "Most teams don't need more dashboards. They need answers."
            </blockquote>
          </div>

          <div className="space-y-6 text-base text-muted-foreground leading-[1.9]">
            <p>
              I'm an <strong className="text-foreground font-semibold">AI Product Manager</strong> building
              AI-powered workflows and products that create real operational leverage — from
              multi-agent PRD generation to text-to-SQL analytics and AI-native accounts payable.
            </p>
            <p>
              I work in the sweet spot where cutting-edge AI meets real business needs. I've cut
              operational costs by 40%, lifted lead generation by 25%, and shipped end-to-end
              products spanning discovery, requirements, and engineering handoff.
            </p>
            <p>
              My approach is structured: <strong className="text-foreground font-semibold">JTBD</strong> for
              problem framing, <strong className="text-foreground font-semibold">HEART</strong> for
              measurement, and schema-validated LLM pipelines instead of vibes-based prompting.
              Deterministic outputs beat clever demos.
            </p>
            <p>
              Everything I build comes from solving real problems — not from exploring technology
              for its own sake. That's what makes the work durable.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-border">
              {[
                { title: "AI & PRODUCT", description: "AI product management, workflow automation, and building technical depth as a PM" },
                { title: "DATA & ANALYTICS", description: "Self-service analytics, visualization, and turning insights into business decisions" },
                { title: "LEADERSHIP", description: "Cross-functional leadership, stakeholder communication, and strategic planning" },
                { title: "INNOVATION", description: "Emerging AI, prompt engineering, and building scalable, evaluated systems" },
              ].map((topic, index) => (
                <div key={index}>
                  <h3 className="text-xs font-bold tracking-[0.14em] text-primary mb-2 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
