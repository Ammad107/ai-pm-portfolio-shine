import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BarChart3, TrendingUp, Users, Filter } from "lucide-react";

const TableauProjects = () => {
  const projects = [
    {
      title: "British Airways Review Dashboard",
      tools: "Tableau | Excel",
      link: "https://public.tableau.com/app/profile/ammad.sattar/viz/Book1_17324606051850/Dashboard1",
      description: "A dynamic analytics dashboard analyzing British Airways customer reviews with interactive filters and visualizations to drive data-driven service improvements.",
      achievements: [
        "Developed a dynamic dashboard analyzing British Airways reviews with interactive filters (date, country, seat type, traveler type) to enhance data exploration and decision-making",
        "Created interactive maps, time series graphs, and aircraft comparisons to visualize service metrics, uncover trends, and identify performance gaps",
        "Leveraged calculated fields and parameters to enable real-time insights, reducing manual analysis effort and improving the efficiency of review-based service evaluations"
      ],
      metrics: [
        { icon: Filter, label: "Interactive Filters", value: "Multi-level" },
        { icon: BarChart3, label: "Visualization Types", value: "5+" },
        { icon: TrendingUp, label: "Analysis Efficiency", value: "3x Faster" }
      ],
      technologies: ["Tableau", "Excel", "Data Visualization", "Interactive Dashboards", "Service Analytics"],
      featured: true
    },
    {
      title: "HR Analytics Dashboard",
      tools: "Tableau | Excel",
      link: "https://public.tableau.com/app/profile/ammad.sattar/viz/HRANALYTICSDASHBOARD_17318629377010/HRDashboard",
      description: "Comprehensive HR Analytics dashboard for Awesome Chocolate Company, delivering actionable insights on workforce demographics, compensation, and organizational trends.",
      achievements: [
        "Created a comprehensive HR Analytics dashboard in Tableau for the Fictional Awesome Chocolate Company, providing insights into job distribution, gender diversity, age demographics, and compensation analysis",
        "Automated data visualization for key metrics such as staff growth trends, qualification vs. salary correlation, and leave balance, reducing manual reporting time and enhancing decision-making efficiency",
        "Implemented interactive filters and advanced visualizations, enabling a user-friendly experience and empowering HR teams to derive actionable insights quickly"
      ],
      metrics: [
        { icon: Users, label: "Workforce Insights", value: "Complete" },
        { icon: BarChart3, label: "Key Metrics", value: "10+" },
        { icon: TrendingUp, label: "Reporting Time", value: "60% Less" }
      ],
      technologies: ["Tableau", "Excel", "HR Analytics", "Data Automation", "Business Intelligence"],
      featured: true
    }
  ];

  return (
    <section id="tableau-projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Tableau Analytics Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Interactive dashboards transforming complex datasets into actionable insights, 
            empowering data-driven decision-making across business functions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <Card key={projectIndex} className="shadow-card hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-primary/30">
              <CardHeader>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl text-foreground mb-2">
                        {project.title}
                      </CardTitle>
                      <p className="text-muted-foreground font-medium">
                        {project.tools}
                      </p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-blue-primary" />
                  </div>
                  <Button 
                    asChild
                    className="w-full bg-gradient-hero hover:opacity-90 transition-opacity"
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Live Dashboard
                    </a>
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {project.metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="text-center p-3 rounded-lg bg-gray-light border border-border">
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
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Skills</h4>
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

export default TableauProjects;
