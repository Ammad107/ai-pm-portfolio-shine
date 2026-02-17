const About = () => {
  const topics = [
    {
      title: "AI & PRODUCT",
      description: "AI product management, workflow automation, and building technical skills as a PM"
    },
    {
      title: "DATA & ANALYTICS",
      description: "Self-service analytics, data visualization, and turning insights into business decisions"
    },
    {
      title: "LEADERSHIP",
      description: "Cross-functional team leadership, stakeholder communication, and strategic planning"
    },
    {
      title: "INNOVATION",
      description: "Emerging AI technologies, prompt engineering, and building scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-8"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          About
        </h2>

        <div className="space-y-5 mb-12">
          <p className="text-base text-foreground leading-relaxed">
            I'm an <span className="text-primary font-semibold">AI Product Manager</span>, building AI-powered workflows 
            and products that create real operational leverage.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I specialize in the sweet spot where cutting-edge AI meets real business needs. From reducing operational 
            costs by 40% to boosting lead generation by 25%, I deliver results that matter.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed italic">
            I bridge the gap between what AI can do and what businesses actually need — turning 
            ambitious ideas into market-leading solutions.
          </p>
          <p className="text-base text-foreground leading-relaxed font-medium">
            Everything I build comes from solving real problems, not just exploring technology.
          </p>
        </div>

        <div className="border-t border-border pt-10">
          <div className="grid sm:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <div key={index}>
                <h3 className="text-xs font-semibold tracking-widest text-foreground mb-2 uppercase">
                  {topic.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
