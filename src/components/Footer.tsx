import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-professional text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ammad Sattar</h3>
          <p className="text-gray-300 mb-6 max-w-md mx-auto">
            AI Product Manager passionate about building innovative solutions 
            that bridge technology and business value.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="mailto:ammadsattar52107@gmail.com"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/ammad-sattar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-600 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ammad Sattar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;