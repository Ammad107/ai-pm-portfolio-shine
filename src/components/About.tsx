import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About
          </h2>
          <div className="w-16 h-1 bg-gradient-hero mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Passionate about transforming ideas into reality through innovative AI solutions 
            and strategic product leadership that drives meaningful business impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a visionary AI Product Manager, I don't just build products—I craft experiences that revolutionize 
                how teams work together. From founding Think Agents to architecting scalable e-commerce platforms, 
                my journey is defined by turning ambitious ideas into market-leading solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I specialize in the sweet spot where cutting-edge AI meets real business needs. Whether it's 
                <span className="text-blue-primary font-medium"> reducing operational costs by 40%</span> or 
                <span className="text-green-accent font-medium"> boosting lead generation by 25%</span>, 
                I deliver results that matter.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 rounded-lg bg-blue-secondary">
                <div className="text-2xl font-bold text-blue-primary mb-1">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-light">
                <div className="text-2xl font-bold text-green-accent mb-1">50K+</div>
                <div className="text-sm text-muted-foreground">Lines of Code</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="h-5 w-5 text-blue-primary" />
              <span className="text-lg">Islamabad, Pakistan</span>
            </div>
          </div>

          <Card className="shadow-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Education & Foundation</h3>
                <div className="w-12 h-1 bg-gradient-hero mx-auto"></div>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-card">
                  <GraduationCap className="h-8 w-8 text-blue-primary mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      Bachelor of Economics
                    </h4>
                    <p className="text-blue-primary font-medium">
                      National University of Science & Technology
                    </p>
                    <p className="text-muted-foreground">
                      Sep 2022 – July 2026
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Building strong analytical and strategic thinking foundations
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-card">
                  <GraduationCap className="h-8 w-8 text-green-accent mt-1" />
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      Medical Sciences
                    </h4>
                    <p className="text-green-accent font-medium">
                      Cadet College Kohat
                    </p>
                    <p className="text-muted-foreground">
                      Apr 2019 – June 2021
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Developed discipline and systematic problem-solving approach
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