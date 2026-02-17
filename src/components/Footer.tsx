const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ammad Sattar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
