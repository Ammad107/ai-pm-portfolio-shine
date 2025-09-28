import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, TrendingUp, DollarSign } from "lucide-react";

const Projects = () => {
  const project = {
    title: "ScalrPay E-Commerce Platform",
    period: "June 2020 – Present",
    description: "A creator-focused e-commerce platform enabling direct monetization for content creators with integrated payments, affiliate tracking, and analytics.",
    achievements: [
      "Led cross-functional team to design and launch platform enabling 100+ creators to monetize directly",
      "Oversaw MVP scoping, user research, and product roadmap to ensure product-market fit",
      "Increased creator earnings and established branded, scalable revenue models with measurable business impact",
      "Delivered end-to-end launch with integrated payments, affiliate tracking, and analytics dashboards"
    ],
    metrics: [
      { icon: Users, label: "Active Creators", value: "100+" },
      { icon: TrendingUp, label: "Growth Rate", value: "25%" },
      { icon: DollarSign, label: "Revenue Impact", value: "Significant" }
    ],
    technologies: ["Product Strategy", "User Research", "MVP Development", "Analytics", "Payment Integration"],
    status: "Ongoing"
  };

  return (
    <section id="projects" className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Work
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Showcasing end-to-end product leadership that transforms vision into reality, 
            delivering measurable impact and driving business growth.
          </p>
        </div>

        <Card className="shadow-card hover:shadow-lg transition-shadow duration-300 max-w-4xl mx-auto">
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-foreground mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground">
                  {project.period}
                </p>
                <Badge className="mt-2 bg-green-light text-green-accent">
                  {project.status}
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.description}
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {project.metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="text-center p-4 rounded-lg bg-background">
                    <IconComponent className="h-8 w-8 text-blue-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Key Achievements</h4>
              <ul className="space-y-3">
                {project.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Technologies & Methodologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-blue-primary text-blue-primary"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Projects;