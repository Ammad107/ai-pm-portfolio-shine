import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
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
      ],
      tags: ["AI Workflows", "Product Strategy", "Team Leadership", "Ethics in AI"]
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
      ],
      tags: ["Digital Operations", "Marketing Automation", "Process Optimization"]
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
      ],
      tags: ["B2B Marketing", "Technical Leadership", "Market Research", "Growth Strategy"]
    },
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
      ],
      tags: ["Financial Analytics", "AI Automation", "Digital Transformation", "Product Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A proven track record of transforming challenges into opportunities and 
            delivering exceptional results across multiple industries and roles.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-1">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="bg-blue-secondary text-blue-primary"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;