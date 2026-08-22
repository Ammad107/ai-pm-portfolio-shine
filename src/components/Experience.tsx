const Experience = () => {
  const experiences = [
    {
      title: "Business Analyst",
      company: "First Woman Bank",
      location: "Abbottabad, Pakistan",
      period: "Apr 2025 – Nov 2025",
      achievements: [
        "Analyzed financial and customer datasets using Excel and AI-assisted analytics tools to identify behavioral patterns and growth opportunities",
        "Designed and implemented AI-powered data automation to streamline reporting workflows using Jira and Notion, reducing analysis time by 30%",
        "Supported digital transformation initiatives and cross-functional product delivery, translating data insights into strategic recommendations for leadership teams",
        "Applied AI-driven model evaluation and analytical reasoning using Python and Mixpanel to create data-informed product concepts, contributing to the AI Product Management roadmap"
      ]
    },
    {
      title: "AI Product Manager",
      company: "Think Agents",
      location: "Islamabad, Pakistan",
      period: "June 2024 – Present",
      achievements: [
        "Led development of AI-powered workflows, optimizing collaboration between developers, marketers, and clients",
        "Defined and executed product requirements, launching AI Automation workflows that reduced manual workload by 40% and increased qualified leads by 25%",
        "Directed full product lifecycle from requirements gathering to launch, ensuring alignment with business objectives",
        "Evaluated ethical considerations of AI workflows, including bias and data privacy, ensuring compliance with responsible AI principles"
      ]
    },
    {
      title: "Marketing & Virtual Assistant",
      company: "EcomSellr",
      location: "USA",
      period: "Apr 2023 – Nov 2024",
      achievements: [
        "Coordinated digital operations using Trello and Notion, ensuring timely delivery of client projects",
        "Executed Marketing campaigns aligned with client objectives, enhancing customer retention and lifetime value",
        "Implemented simple automations (Zapier, Google Sheets) to streamline lead tracking and scheduling, saving 5+ hours weekly"
      ]
    },
    {
      title: "Creative Director",
      company: "The Talent Output INC",
      location: "USA",
      period: "Jan 2021 – Nov 2023",
      achievements: [
        "Directed B2B marketing strategy, expanding market share by 15% through positioning and differentiation",
        "Contributed over 50K+ lines of code to the company's core codebase via Git, strengthening technical infrastructure",
        "Conducted market research and analysis, increasing lead generation by 30% through targeted initiatives"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Building products, teams, and leverage</h2>
        </div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b border-border pb-10 last:border-b-0 last:pb-0">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm text-primary font-medium">{exp.company} · {exp.location}</p>
                </div>
                <p className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</p>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5 text-xs">●</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
