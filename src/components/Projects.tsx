import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users, TrendingUp, DollarSign, Database } from "lucide-react";

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
      status: "Ongoing",
      loomUrl: "https://www.loom.com/embed/2a69eceec2c24f30ae43000d5014c096"
    },
    {
      title: "TimeLens (AI-Powered Image Transformation Tool)",
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
      status: "In Development",
      videoUrl: "/videos/TimeLens.mp4"
    },
    {
      title: "Text-to-SQL AI Application",
      period: "2024",
      description: "A fully local Text-to-SQL application that turns plain English into database queries instantly — bridging the gap between business teams and databases without API costs or cloud dependency.",
      achievements: [
        "Built end-to-end NLP-to-SQL pipeline enabling non-technical users to query databases using natural language",
        "Implemented schema-grounded SQL generation with deterministic outputs (temperature=0) for reliable query results",
        "Designed modular architecture scalable to Postgres/Snowflake, demonstrating production-grade thinking in a portfolio build",
        "Reduced analyst dependency by enabling self-service analytics, accelerating decision cycles across business teams"
      ],
      metrics: [
        { icon: TrendingUp, label: "Model", value: "SmolLM2 1.7B" },
        { icon: Users, label: "Runs", value: "100% Local" },
        { icon: DollarSign, label: "API Cost", value: "$0" }
      ],
      technologies: ["Python", "LangChain", "Ollama", "SQLite", "Streamlit", "Prompt Engineering"],
      status: "Live",
      liveUrl: "https://my-cool-sql-ai.streamlit.app/"
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

        <div className="grid lg:grid-cols-2 gap-8 [&>*:last-child:nth-child(odd)]:lg:col-span-2 [&>*:last-child:nth-child(odd)]:lg:max-w-[calc(50%-1rem)] [&>*:last-child:nth-child(odd)]:lg:mx-auto">
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
                    <Badge className={`mt-2 ${project.status === 'Ongoing' || project.status === 'Live' ? 'bg-green-light text-green-accent' : 'bg-blue-light text-blue-primary'}`}>
                      {project.status === 'Live' ? '🟢 Live' : project.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {project.loomUrl && (
                  <div className="rounded-lg overflow-hidden bg-background">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                      <iframe 
                        src={project.loomUrl}
                        frameBorder="0"
                        allowFullScreen
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      ></iframe>
                    </div>
                    <p className="text-xs text-muted-foreground text-center py-2">
                      Project Walkthrough
                    </p>
                  </div>
                )}

                {project.videoUrl && (
                  <div className="rounded-lg overflow-hidden bg-background">
                    <video 
                      controls 
                      className="w-full"
                      preload="metadata"
                    >
                      <source src={project.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <p className="text-xs text-muted-foreground text-center py-2">
                      Project Demo - Currently in development
                    </p>
                  </div>
                )}

                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-hero text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Try Live Demo
                  </a>
                )}

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