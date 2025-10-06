import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Frameworks = () => {
  const frameworks = [
    {
      title: "AI-Powered Meeting Notes & Insights",
      company: "Google Workspace",
      description: "End-to-end AI meeting assistant leveraging Google's ecosystem (Meet, Docs, Calendar, Gmail) with real-time transcription, automated action tracking, and deep workflow integration.",
      keyFeatures: [
        "Real-time AI transcription with <1s latency",
        "Automated task extraction synced with Calendar/Tasks",
        "Multi-language support (120+ languages)",
        "Sentiment analysis and engagement analytics"
      ],
      technologies: ["Google Meet API", "NLP", "Google Workspace Integration", "Real-time Analytics"],
      impact: "Targets 3B+ Google Workspace users to reduce 4.5 hours/week spent on manual meeting notes"
    },
    {
      title: "Apple's Siri Voice Assistant with On-Device AI",
      company: "Apple Inc.",
      description: "Revolutionary shift to on-device AI processing using Apple Neural Engine, enabling instant responses, enhanced privacy, and offline functionality for core voice assistant capabilities.",
      keyFeatures: [
        "50% reduction in response latency",
        "100% on-device processing for sensitive data",
        "Offline functionality for core commands",
        "20% projected increase in user engagement"
      ],
      technologies: ["Apple Neural Engine", "On-Device ML", "NLP", "Privacy-First AI"],
      impact: "Positions Siri as industry leader in privacy-preserving AI against Google Assistant and Alexa"
    },
    {
      title: "Dell AI Factory",
      company: "Dell Technologies",
      description: "Integrated AI infrastructure platform orchestrating workloads across PCs, edge, on-prem, and cloud environments with seamless lifecycle management and cost optimization.",
      keyFeatures: [
        "40% better TCO than cloud-only solutions",
        "99.9% uptime SLA guarantee",
        "Resource provisioning under 5 minutes",
        "Hybrid orchestration across all environments"
      ],
      technologies: ["PowerEdge Servers", "NVIDIA AI Enterprise", "Kubernetes", "VMware vSphere"],
      impact: "Target 35% enterprise AI infrastructure market capture with $8.5B ARR by 2027"
    },
    {
      title: "Dell Pro AI Studio",
      company: "Dell Technologies",
      description: "Unified AI development platform with pre-validated models, integrated environments, and enterprise-grade security that reduces AI application development cycles by 75%.",
      keyFeatures: [
        "Development time: 6-8 months → 6-8 weeks",
        "50,000+ active developers target",
        "Enterprise compliance & governance built-in",
        "<100ms inference latency"
      ],
      technologies: ["Intel NPUs", "NVIDIA RTX AI", "Hugging Face", "Containerized Deployment"],
      impact: "Target 35% of Fortune 500 AI development market by Q4 2025"
    },
    {
      title: "Google's Gemini AI Integration",
      company: "Google LLC",
      description: "Next-gen multimodal AI integration transforming Search and Assistant into intelligent conversational partners with 1M token context window and native multimodal understanding.",
      keyFeatures: [
        "1 million token context window",
        "Sub-200ms response latency at scale",
        "32 language support at launch",
        "Multimodal processing (text, image, audio, video)"
      ],
      technologies: ["Gemini AI Model", "Multimodal Learning", "Real-time Web Grounding", "Edge Computing"],
      impact: "Serves 8.5B daily searches maintaining 92% market dominance against ChatGPT and Bing"
    }
  ];

  return (
    <section id="frameworks" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Structured Frameworks for Building Enterprise AI Solutions
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Comprehensive Product Requirements Documents demonstrating strategic thinking, 
            technical depth, and end-to-end product leadership across major tech companies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <Card key={index} className="shadow-card hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {framework.title}
                    </CardTitle>
                    <Badge className="bg-blue-light text-blue-primary mb-3">
                      {framework.company}
                    </Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      {framework.description}
                    </p>
                  </div>
                  <FileText className="h-8 w-8 text-blue-primary flex-shrink-0" />
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {framework.keyFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-blue-primary text-blue-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Business Impact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {framework.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            These PRDs demonstrate comprehensive product thinking across diverse AI domains including 
            voice assistants, enterprise infrastructure, developer platforms, and multimodal AI integration.
          </p>
          <Button className="bg-gradient-hero text-white hover:opacity-90">
            <Download className="h-4 w-4 mr-2" />
            Download Complete PRD Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Frameworks;
