import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Work" },
    { href: "#projects", label: "Case Studies" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Connect" },
  ];

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b transition-colors ${
        scrolled ? "border-border" : "border-transparent"
      }`}
    >
      <div className="max-w-[1080px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-[68px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg text-foreground"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Ammad Sattar
          </button>

          <div className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-[0.8rem] font-semibold uppercase tracking-[0.07em] text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground p-2" aria-label="Menu">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-1 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-2 py-2 text-xs font-semibold uppercase tracking-[0.07em] text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
