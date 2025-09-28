import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate AI Product Manager with a proven track record of leading innovative projects 
            and driving business growth through strategic product development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              As an AI Product Manager, I specialize in bridging the gap between cutting-edge AI technology 
              and real-world business solutions. My experience spans from founding Think Agents to leading 
              product development across multiple companies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm passionate about building AI-powered workflows that optimize team collaboration and drive 
              measurable business impact. My approach combines deep technical understanding with strategic 
              product thinking to deliver solutions that scale.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Islamabad, Pakistan</span>
            </div>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Bachelor of Economics
                    </h3>
                    <p className="text-muted-foreground">
                      National University of Science & Technology
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sep 2022 – July 2026
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <GraduationCap className="h-6 w-6 text-blue-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Medical Sciences
                    </h3>
                    <p className="text-muted-foreground">
                      Cadet College Kohat
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Apr 2019 – June 2021
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;