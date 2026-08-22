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
    <section id="skills" className="py-24 bg-secondary">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Toolkit</p>
          <h2 className="section-title">Skills &amp; Certifications</h2>
        </div>

        <div className="space-y-10">
          {categories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xs font-bold tracking-[0.14em] text-primary mb-4 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-default"
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
