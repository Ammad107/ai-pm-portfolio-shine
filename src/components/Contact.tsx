import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ammadsattar52107@gmail.com",
      href: "mailto:ammadsattar52107@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3453345225",
      href: "tel:+923453345225"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ammad-sattar",
      href: "https://linkedin.com/in/ammad-sattar"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss AI product opportunities, collaboration, or just want to connect? 
            I'm always open to interesting conversations about product management and AI innovation.
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-foreground">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-light hover:bg-blue-secondary transition-colors duration-200">
                    <div className="p-3 bg-blue-primary rounded-lg">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-blue-primary transition-colors font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">
                          {contact.value}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Button
                asChild
                size="lg"
                className="bg-blue-primary hover:bg-blue-primary/90 text-white px-8 py-3"
              >
                <a href="mailto:ammadsattar52107@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send an Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;