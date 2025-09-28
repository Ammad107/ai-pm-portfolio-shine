import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Users, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Brain,
      skills: [
        "AI Workflows",
        "Prompt Engineering", 
        "MVP Design",
        "Agile/Scrum",
        "Requirements Gathering",
        "Product Strategy",
        "Roadmap Planning"
      ],
      color: "bg-blue-primary"
    },
    {
      title: "Technical Expertise",
      icon: Code,
      skills: [
        "Python",
        "SQL", 
        "API Integration",
        "Data Modeling",
        "Automation",
        "Zapier",
        "Google Sheets"
      ],
      color: "bg-green-accent"
    },
    {
      title: "Business & Collaboration",
      icon: Users,
      skills: [
        "Market Research",
        "Product Positioning",
        "Growth Strategy",
        "Cross-Functional Leadership",
        "Stakeholder Communication",
        "Team Management"
      ],
      color: "bg-blue-primary"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Jira",
        "Asana", 
        "ClickUp",
        "Trello",
        "Notion",
        "CRM Systems",
        "Git"
      ],
      color: "bg-green-accent"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            A comprehensive toolkit spanning cutting-edge technology, strategic thinking, 
            and leadership excellence that drives innovation and business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-foreground">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="outline"
                        className="border-muted text-muted-foreground hover:border-blue-primary hover:text-blue-primary transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;