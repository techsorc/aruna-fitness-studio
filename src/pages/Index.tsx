
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { Link } from "react-router-dom";

const Index = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const scrollServices = (direction: 'left' | 'right') => {
    if (servicesRef.current) {
      const scrollAmount = 320; // Approximately one card width
      const currentScroll = servicesRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      servicesRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (testimonialRef.current) {
      const scrollAmount = testimonialRef.current.clientWidth;
      const currentScroll = testimonialRef.current.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      testimonialRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  // Sample services data
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific fitness goals and needs.",
      icon: "/placeholder.svg"
    },
    {
      title: "Group Classes",
      description: "Energetic and motivating classes designed for women of all fitness levels.",
      icon: "/placeholder.svg"
    },
    {
      title: "Nutrition Coaching",
      description: "Expert guidance to help you make healthier food choices and reach your goals.",
      icon: "/placeholder.svg"
    },
    {
      title: "Yoga & Pilates",
      description: "Improve flexibility, build strength, and find your inner balance.",
      icon: "/placeholder.svg"
    },
    {
      title: "Cardio Kickboxing",
      description: "High-energy workouts that burn calories and reduce stress.",
      icon: "/placeholder.svg"
    },
    {
      title: "Weight Management",
      description: "Comprehensive programs to help you achieve and maintain a healthy weight.",
      icon: "/placeholder.svg"
    }
  ];

  // Sample testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      quote: "Aruna Fitness transformed my life! I lost 30 pounds and gained confidence I never knew I had.",
      beforeImage: "https://picsum.photos/seed/aruna1/600/400",
      afterImage: "https://picsum.photos/seed/aruna2/600/400"
    },
    {
      name: "Emily Rodriguez",
      quote: "The supportive environment at Aruna helped me achieve fitness goals I thought were impossible.",
      beforeImage: "https://picsum.photos/seed/aruna3/600/400",
      afterImage: "https://picsum.photos/seed/aruna4/600/400"
    },
    {
      name: "Michelle Park",
      quote: "Not only did I gain physical strength, but mental strength as well. Forever grateful!",
      beforeImage: "https://picsum.photos/seed/aruna5/600/400",
      afterImage: "https://picsum.photos/seed/aruna6/600/400"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient section-padding min-h-[90vh] flex items-center">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                Transform Your Body, <span className="text-aruna-purple">Empower</span> Your Life
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Aruna Fitness Studio is a ladies-only gym designed to help you achieve your fitness goals in a supportive, judgment-free environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white">
                  Join Now
                </Button>
                <Button variant="outline" className="border-aruna-purple text-aruna-purple hover:bg-aruna-purple/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-aruna-pink rounded-full opacity-30"></div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-aruna-purple rounded-full opacity-20"></div>
              <img 
                src="https://picsum.photos/seed/aruna7/600/800" 
                alt="Woman exercising"
                className="rounded-2xl shadow-custom relative z-10 w-full h-[500px] object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services" 
            subtitle="Discover our range of fitness services specifically designed for women of all ages and fitness levels." 
          />
          
          <div className="relative">
            <div 
              ref={servicesRef}
              className="flex overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory gap-6"
            >
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="min-w-[300px] snap-start"
                >
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scrollServices('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Previous service"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
            
            <button 
              onClick={() => scrollServices('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Next service"
            >
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
          
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-aruna-purple text-aruna-purple hover:bg-aruna-purple/10">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Testimonials" 
            subtitle="See the amazing transformations and hear what our members have to say about their journey with us." 
          />
          
          <div className="relative">
            <div 
              ref={testimonialRef}
              className="flex overflow-x-auto scrollbar-none snap-x snap-mandatory gap-8"
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full snap-start"
                >
                  <TestimonialCard 
                    name={testimonial.name}
                    quote={testimonial.quote}
                    beforeImage={testimonial.beforeImage}
                    afterImage={testimonial.afterImage}
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scrollTestimonials('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-gray-600" />
            </button>
            
            <button 
              onClick={() => scrollTestimonials('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-aruna-purple text-aruna-purple hover:bg-aruna-purple/10">
                See More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading title="About Us" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://picsum.photos/seed/aruna8/600/400"
                alt="Our gym"
                className="w-full h-auto rounded-2xl shadow-custom"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Your Journey, Our Mission</h3>
              <p className="text-gray-600 mb-6">
                At Aruna Fitness Studio, we believe every woman deserves a space where she can focus on her health and wellness without judgment or intimidation. Our ladies-only gym provides a supportive community where you can build strength, confidence, and lifelong healthy habits.
              </p>
              <p className="text-gray-600 mb-6">
                Founded in 2018 by fitness expert Aruna Kapoor, our studio has helped hundreds of women transform their bodies and lives through personalized training programs, group fitness classes, and nutrition guidance.
              </p>
              <Link to="/about">
                <Button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeading 
            title="Get In Touch" 
            subtitle="Have questions or ready to start your fitness journey? Reach out to us!" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-custom p-8">
              <ContactForm />
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Visit Us</h3>
                <p className="text-gray-600">
                  123 Fitness Avenue<br />
                  Wellness City, ZZ 12345
                </p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Email:</span> info@arunafitness.com
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> (123) 456-7890
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Hours</h3>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Monday-Friday:</span> 6:00 AM - 9:00 PM
                </p>
                <p className="text-gray-600 mb-2">
                  <span className="font-medium">Saturday:</span> 8:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Sunday:</span> 10:00 AM - 4:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
