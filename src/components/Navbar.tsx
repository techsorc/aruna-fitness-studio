import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  
  return (
    <nav className="py-4 shadow-sm bg-white fixed w-full top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-aruna-dark-purple">
          Aruna Fitness Studio
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-aruna-purple",
                location.pathname === link.path
                  ? "text-aruna-purple"
                  : "text-gray-600"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white">
            Join Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "py-2 font-medium",
                  location.pathname === link.path
                    ? "text-aruna-purple"
                    : "text-gray-600"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white w-full">
              Join Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
