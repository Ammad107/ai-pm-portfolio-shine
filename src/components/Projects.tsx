import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ScalrPay E-Commerce Platform",
      description: "A creator-focused e-commerce platform enabling direct monetization for content creators with integrated payments, affiliate tracking, and analytics.",
      tags: ["Product Strategy", "User Research", "Analytics"],
      status: "Ongoing",
      loomUrl: "https://www.loom.com/embed/2a69eceec2c24f30ae43000d5014c096",
    },
    {
      title: "TimeLens",
      description: "React.js frontend enabling users to upload photos and transform them into decade-specific styles using multimodal AI (Gemini 2.5 Flash).",
      tags: ["React.js", "Multimodal AI", "Product Roadmap"],
      status: "In Development",
      videoUrl: "/videos/TimeLens.mp4",
    },
    {
      title: "Personal AI Data Analyst",
      description: "An agentic AI application that turns raw datasets into visual insights using plain English — automated cleaning, LLM reasoning, and interactive Plotly visualizations.",
      tags: ["Python", "Streamlit", "Groq Cloud", "Llama 3"],
      status: "Live",
      liveUrl: "https://ai-cooldata-analyst.streamlit.app/",
    },
    {
      title: "Text-to-SQL AI Application",
      description: "A fully local Text-to-SQL app that turns plain English into database queries instantly — no API costs, no cloud dependency.",
      tags: ["Python", "LangChain", "Ollama", "SQLite"],
      status: "Live",
      liveUrl: "https://my-cool-sql-ai.streamlit.app/",
    },
    {
      title: "Veriflow AI",
      description: "AI-powered Accounts Payable platform for SMEs and insurance firms — stops revenue leakage through duplicate detection, price creep monitoring, and AI invoice extraction with audit-ready storage.",
      tags: ["AI Agents", "Fintech", "Accounts Payable"],
      status: "Live",
      liveUrl: "https://veriflowai.lovable.app/",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-12"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Projects & Publications
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Media */}
              {project.videoUrl && (
                <div className="rounded-lg overflow-hidden mb-4 bg-muted">
                  <video controls preload="metadata" className="w-full aspect-video object-cover">
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}
              {project.loomUrl && (
                <div className="rounded-lg overflow-hidden mb-4 bg-muted">
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={project.loomUrl}
                      frameBorder="0"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    />
                  </div>
                </div>
              )}

              {/* Status badge */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {project.tags[0]}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  project.status === 'Live' ? 'bg-green-100 text-green-700' : 
                  project.status === 'Ongoing' ? 'bg-amber-100 text-amber-700' : 
                  'bg-muted text-muted-foreground'
                }`}>
                  {project.status}
                </span>
              </div>

              <h3 className="text-base font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Github size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
