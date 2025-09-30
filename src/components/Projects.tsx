import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, TrendingUp, DollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
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
    },
    {
      title: "Timeline Jesos (AI-Powered Image Transformation Tool)",
      period: "2024",
      description: "A React.js frontend enabling users to upload photos and transform them into decade-specific styles (1950s–1990s) using multimodal AI technology.",
      achievements: [
        "Developed React.js frontend with seamless photo upload and AI-powered style transformation capabilities",
        "Integrated multimodal AI (Gemini 2.5 Flash) delivering high-quality, context-aware image outputs with scalability",
        "Designed comprehensive product roadmap and AI feature pipeline with ethics and personalization considerations",
        "Engineered backend specifications and automation workflows, optimizing API integration and inference efficiency"
      ],
      metrics: [
        { icon: TrendingUp, label: "AI Integration", value: "Gemini 2.5" },
        { icon: Users, label: "Style Decades", value: "5 Eras" },
        { icon: DollarSign, label: "Processing", value: "Real-time" }
      ],
      technologies: ["React.js", "Multimodal AI", "API Integration", "Product Roadmap", "AI Ethics"],
      status: "Completed"
    }
  ];

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

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <Card key={projectIndex} className="shadow-card hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {project.period}
                    </p>
                    <Badge className={`mt-2 ${project.status === 'Ongoing' ? 'bg-green-light text-green-accent' : 'bg-blue-light text-blue-primary'}`}>
                      {project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center p-3 rounded-lg bg-background">
                        <IconComponent className="h-6 w-6 text-blue-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-foreground mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-sm">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Methodologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="border-blue-primary text-blue-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;