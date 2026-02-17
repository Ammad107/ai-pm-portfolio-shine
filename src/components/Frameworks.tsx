import { ExternalLink } from "lucide-react";

const Frameworks = () => {
  const frameworks = [
    {
      title: "AI-Powered Meeting Notes & Insights",
      company: "Google Workspace",
      description: "End-to-end AI meeting assistant with real-time transcription, automated action tracking, and deep workflow integration.",
      impact: "Targets 3B+ users to reduce 4.5 hours/week on manual meeting notes"
    },
    {
      title: "Siri Voice Assistant with On-Device AI",
      company: "Apple Inc.",
      description: "On-device AI processing using Apple Neural Engine — instant responses, enhanced privacy, offline functionality.",
      impact: "50% reduction in response latency, 100% on-device processing"
    },
    {
      title: "Dell AI Factory",
      company: "Dell Technologies",
      description: "Integrated AI infrastructure orchestrating workloads across PCs, edge, on-prem, and cloud environments.",
      impact: "40% better TCO than cloud-only solutions"
    },
    {
      title: "Dell Pro AI Studio",
      company: "Dell Technologies",
      description: "Unified AI development platform reducing application development cycles from 6–8 months to 6–8 weeks.",
      impact: "75% reduction in development time"
    },
    {
      title: "Google's Gemini AI Integration",
      company: "Google LLC",
      description: "Multimodal AI with 1M token context window transforming Search and Assistant into intelligent conversational partners.",
      impact: "Serves 8.5B daily searches with 92% market dominance"
    }
  ];

  return (
    <section id="frameworks" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <h2
          className="text-3xl sm:text-4xl text-foreground mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          PRD Frameworks
        </h2>
        <p className="text-base text-muted-foreground mb-12 max-w-2xl">
          Product Requirements Documents demonstrating strategic thinking and technical depth across major tech companies.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((fw, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card p-5 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {fw.company}
              </span>
              <h3 className="text-base font-semibold text-foreground mt-2 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                {fw.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {fw.description}
              </p>
              <p className="text-xs text-primary font-medium">
                {fw.impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
