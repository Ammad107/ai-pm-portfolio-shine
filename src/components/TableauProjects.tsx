import { ExternalLink } from "lucide-react";

const TableauProjects = () => {
  const projects = [
    {
      title: "British Airways Review Dashboard",
      tools: "Tableau · Excel",
      link: "https://public.tableau.com/app/profile/ammad.sattar/viz/Book1_17324606051850/Dashboard1",
      description: "Dynamic analytics dashboard analyzing British Airways customer reviews with interactive filters and visualizations."
    },
    {
      title: "HR Analytics Dashboard",
      tools: "Tableau · Excel",
      link: "https://public.tableau.com/app/profile/ammad.sattar/viz/HRANALYTICSDASHBOARD_17318629377010/HRDashboard",
      description: "Comprehensive HR Analytics dashboard delivering insights on workforce demographics, compensation, and organizational trends."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Analytics</p>
          <h2 className="section-title">Tableau dashboards that answer questions</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {project.tools}
              </span>
              <h3 className="text-base font-semibold text-foreground mt-2 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <ExternalLink size={14} />
                View Dashboard
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TableauProjects;
