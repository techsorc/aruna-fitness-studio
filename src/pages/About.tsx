
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const About = () => {
  // Sample team data
  const team = [
    {
      name: "Aruna Kapoor",
      role: "Founder & Head Trainer",
      bio: "Certified fitness expert with over 15 years of experience in women's health and fitness.",
      image: "https://picsum.photos/seed/aruna15/300/300"
    },
    {
      name: "Jessica Lee",
      role: "Yoga & Pilates Instructor",
      bio: "Former professional dancer with expertise in mind-body connection and flexibility training.",
      image: "https://picsum.photos/seed/aruna16/300/300"
    },
    {
      name: "Sophia Martinez",
      role: "Nutrition Coach",
      bio: "Registered dietitian specializing in women's nutritional needs and sustainable eating habits.",
      image: "https://picsum.photos/seed/aruna17/300/300"
    },
    {
      name: "Lisa Johnson",
      role: "Strength Training Specialist",
      bio: "Powerlifting champion dedicated to helping women build strength and confidence.",
      image: "https://picsum.photos/seed/aruna18/300/300"
    }
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        <SectionHeading title="About Aruna Fitness Studio" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Aruna Fitness Studio was founded in 2018 by Aruna Kapoor, a certified fitness trainer with a passion for empowering women through fitness. After years of working in co-ed gyms, Aruna noticed that many women felt uncomfortable or intimidated in traditional gym settings, which often prevented them from reaching their full potential.
            </p>
            <p className="text-gray-600 mb-6">
              Determined to create a space where women could focus on their fitness goals without judgment or distractions, Aruna opened the doors to a boutique fitness studio designed specifically for women. What began as a small personal training facility has now grown into a comprehensive fitness center offering a wide range of services tailored to women's unique needs and goals.
            </p>
            <p className="text-gray-600">
              Today, Aruna Fitness Studio has helped hundreds of women transform their bodies, boost their confidence, and improve their overall well-being through personalized training programs, supportive group classes, and expert nutrition guidance.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-aruna-purple rounded-full opacity-20"></div>
            <img 
              src="https://picsum.photos/seed/aruna19/600/400" 
              alt="Our gym"
              className="rounded-2xl shadow-custom relative z-10" 
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Mission & Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
              <div className="w-12 h-12 rounded-full bg-aruna-pink flex items-center justify-center mb-4">
                <span className="text-aruna-purple font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Empowerment</h4>
              <p className="text-gray-600">
                We believe in empowering women to take control of their health and fitness through education, support, and personalized guidance.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
              <div className="w-12 h-12 rounded-full bg-aruna-blue flex items-center justify-center mb-4">
                <span className="text-aruna-purple font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Community</h4>
              <p className="text-gray-600">
                We foster a supportive, inclusive community where women can connect, motivate each other, and celebrate successes together.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
              <div className="w-12 h-12 rounded-full bg-aruna-peach flex items-center justify-center mb-4">
                <span className="text-aruna-purple font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Balance</h4>
              <p className="text-gray-600">
                We promote balanced approaches to fitness that are sustainable, enjoyable, and aligned with each woman's unique lifestyle and goals.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <SectionHeading title="Meet Our Team" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-custom overflow-hidden hover-scale">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                  <p className="text-aruna-purple mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-aruna-gray rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Ready to Join Our Community?</h3>
              <p className="text-gray-600 mb-6">
                Take the first step toward your fitness transformation today. Join our supportive community of women and experience the Aruna difference for yourself.
              </p>
              <button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white py-3 px-6 rounded-lg font-medium transition duration-300 flex items-center">
                Get Started Today <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
            <div className="flex justify-center md:justify-end">
              <img 
                src="https://picsum.photos/seed/aruna20/500/300" 
                alt="Gym community" 
                className="rounded-2xl shadow-custom max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
