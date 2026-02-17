const Skills = () => {
  const categories = [
    {
      title: "PRODUCT & AI",
      skills: ["AI Workflows", "Prompt Engineering", "MVP Design", "Agile/Scrum", "Product Strategy", "Roadmap Planning", "Requirements Gathering"]
    },
    {
      title: "TECHNICAL",
      skills: ["Python", "SQL", "API Integration", "Data Modeling", "Automation", "React.js", "LangChain"]
    },
    {
      title: "TOOLS & PLATFORMS",
      skills: ["Jira", "Asana", "ClickUp", "Trello", "Notion", "Zapier", "Git", "Streamlit"]
    },
    {
      title: "CERTIFICATIONS",
      skills: ["AI Product Management", "Data Analytics"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-12 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Skills & Certifications
        </h2>

        <div className="space-y-10">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xs font-semibold tracking-[0.2em] text-primary mb-4 uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
