import { ExternalLink, Plus, Minus } from "lucide-react";
import { useState } from "react";

type Project = {
  title: string;
  tag: string;
  status: string;
  summary: string;
  tags: string[];
  bullets?: string[];
  liveUrl?: string;
  videoUrl?: string;
  loomUrl?: string;
  badge?: { num: string; label: string };
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI PRD Studio",
    tag: "AI-Native Product Tooling",
    status: "Live",
    featured: true,
    summary:
      "An AI-native PRD platform that converts unstructured product ideas, research, and voice notes into rigorous, engineering-ready requirements.",
    tags: ["JTBD", "HEART", "Structured LLM Outputs", "Evals"],
    badge: { num: "~30s", label: "Idea to PRD" },
    bullets: [
      "Built and launched an AI-native PRD platform that converts unstructured product ideas, research, and voice notes into rigorous requirements using JTBD, HEART, and structured LLM outputs, achieving ~30-second idea-to-PRD generation.",
      "Architected a multi-agent-style Generate → Critique → Revise pipeline with independent schema-validated model calls, creating deterministic, structured outputs instead of relying on conversational prompting.",
      "Productized an AI evaluation loop that scores PRDs across problem clarity, goal specificity, user-story quality, and metric measurability, automatically identifying weak assumptions and blocking risks before engineering handoff.",
      "Delivered an end-to-end product workflow including voice transcription, versioned revisions, rollback, PDF/Markdown exports, and Jira/Linear integration payloads, bridging discovery → requirements → engineering execution.",
    ],
    liveUrl: "https://aiprdstudio.lovable.app/",
  },
  {
    title: "Personal AI Data Analyst",
    tag: "Agentic Analytics",
    status: "Live",
    summary:
      "An agentic AI application that turns raw datasets into visual insights using plain English — automated cleaning, LLM reasoning, and interactive Plotly visualizations.",
    tags: ["Python", "Streamlit", "Groq Cloud", "Llama 3"],
    liveUrl: "https://ai-cooldata-analyst.streamlit.app/",
  },
  {
    title: "Text-to-SQL AI Application",
    tag: "Local LLM Tooling",
    status: "Live",
    summary:
      "A fully local Text-to-SQL app that turns plain English into database queries instantly — no API costs, no cloud dependency.",
    tags: ["Python", "LangChain", "Ollama", "SQLite"],
    liveUrl: "https://my-cool-sql-ai.streamlit.app/",
  },
  {
    title: "Veriflow AI",
    tag: "Fintech / AP Automation",
    status: "Live",
    summary:
      "AI-powered Accounts Payable platform for SMEs and insurance firms — stops revenue leakage through duplicate detection, price creep monitoring, and AI invoice extraction with audit-ready storage.",
    tags: ["AI Agents", "Fintech", "Accounts Payable"],
    liveUrl: "https://veriflowai.lovable.app/",
  },
];

const StatusPill = ({ status }: { status: string }) => (
  <span
    className={`text-[0.7rem] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
      status === "Live"
        ? "bg-accent text-primary"
        : "bg-secondary text-muted-foreground"
    }`}
  >
    {status}
  </span>
);

const Projects = () => {
  const [open, setOpen] = useState(true);
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="section-label">Case Studies</p>
          <h2 className="section-title">Work that moved the needle</h2>
        </div>

        {/* Featured case study */}
        <article className="rounded-2xl border border-border bg-card p-7 sm:p-10 mb-8">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
                  {featured.tag}
                </span>
                <StatusPill status={featured.status} />
              </div>
              <h3
                className="text-2xl sm:text-3xl text-foreground mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {featured.title}
              </h3>
              <p className="text-base text-muted-foreground leading-[1.8] max-w-2xl">
                {featured.summary}
              </p>
            </div>

            {featured.badge && (
              <div className="bg-secondary rounded-xl px-6 py-5 text-center self-start min-w-[150px]">
                <div
                  className="text-3xl text-primary leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {featured.badge.num}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {featured.badge.label}
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-border my-7" />

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.07em] text-foreground hover:text-primary transition-colors"
          >
            {open ? <Minus size={14} /> : <Plus size={14} />}
            {open ? "Hide Details" : "Read Full Case Study"}
          </button>

          {open && (
            <ul className="mt-6 space-y-4">
              {featured.bullets?.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-2 text-[0.6rem]">●</span>
                  <span className="text-sm sm:text-base text-muted-foreground leading-[1.8]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-8">
            {featured.tags.map((t) => (
              <span
                key={t}
                className="text-xs text-muted-foreground border border-border rounded-full px-3 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={featured.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta bg-foreground text-background hover:bg-primary hover:text-primary-foreground mt-7"
          >
            Visit AI PRD Studio <ExternalLink size={14} />
          </a>
        </article>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 transition-colors flex flex-col"
            >
              {project.videoUrl && (
                <div className="rounded-lg overflow-hidden mb-5 bg-secondary">
                  <video controls preload="metadata" className="w-full aspect-video object-cover">
                    <source src={project.videoUrl} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-primary">
                  {project.tag}
                </span>
                <StatusPill status={project.status} />
              </div>

              <h3
                className="text-lg text-foreground mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.7rem] text-muted-foreground border border-border rounded-full px-2.5 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.07em] text-primary hover:underline mt-auto"
                >
                  View Live <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
