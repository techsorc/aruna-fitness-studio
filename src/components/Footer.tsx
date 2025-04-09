import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link to="/" className="text-xl font-bold text-aruna-dark-purple mb-4 md:mb-0">
            Aruna Fitness Studio
          </Link>
          
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-aruna-purple text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-aruna-purple mt-4 md:mt-0"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-2 md:mb-0">
            &copy; {currentYear} Aruna Fitness Studio. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-500 hover:text-aruna-purple text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-aruna-purple text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
