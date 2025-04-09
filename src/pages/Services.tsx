
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const Services = () => {
  // Sample services data
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific fitness goals and needs. Our certified trainers work closely with you to create a personalized fitness plan that fits your lifestyle and helps you achieve results faster.",
      icon: "/placeholder.svg"
    },
    {
      title: "Group Classes",
      description: "Energetic and motivating classes designed for women of all fitness levels. From high-intensity interval training to dance fitness, our classes make working out fun and social.",
      icon: "/placeholder.svg"
    },
    {
      title: "Nutrition Coaching",
      description: "Expert guidance to help you make healthier food choices and reach your goals. Our nutrition coaches create customized meal plans and provide ongoing support to ensure your success.",
      icon: "/placeholder.svg"
    },
    {
      title: "Yoga & Pilates",
      description: "Improve flexibility, build strength, and find your inner balance. Our yoga and Pilates classes focus on mindful movement, proper alignment, and breathing techniques for a holistic approach to fitness.",
      icon: "/placeholder.svg"
    },
    {
      title: "Cardio Kickboxing",
      description: "High-energy workouts that burn calories and reduce stress. Learn proper techniques while getting a full-body workout that improves coordination and cardiovascular health.",
      icon: "/placeholder.svg"
    },
    {
      title: "Weight Management",
      description: "Comprehensive programs to help you achieve and maintain a healthy weight. Combining exercise, nutrition, and lifestyle coaching, our weight management programs address all aspects of sustainable weight loss.",
      icon: "/placeholder.svg"
    },
    {
      title: "Strength Training",
      description: "Build lean muscle, increase metabolism, and enhance overall fitness. Our strength training programs use a variety of equipment and techniques to help you get stronger and more toned.",
      icon: "/placeholder.svg"
    },
    {
      title: "Wellness Workshops",
      description: "Educational sessions on various health and wellness topics. From stress management to sleep hygiene, our workshops provide valuable information to support your overall wellbeing.",
      icon: "/placeholder.svg"
    },
    {
      title: "Body Composition Analysis",
      description: "Accurate measurements of your body fat percentage, muscle mass, and other key metrics. Track your progress with regular assessments to keep you motivated and on track.",
      icon: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="container-custom">
          <SectionHeading 
            title="Our Services" 
            subtitle="Explore our comprehensive range of fitness services designed specifically for women" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
        
        {/* Membership Plans */}
        <div className="container-custom mt-24">
          <SectionHeading 
            title="Membership Plans" 
            subtitle="Choose the perfect plan that fits your lifestyle and fitness goals" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-custom p-8 border border-gray-100 hover-scale">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <div className="text-3xl font-bold text-aruna-purple">$49<span className="text-base font-normal text-gray-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Access to gym facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">2 group classes per week</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Fitness assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-gray-400">Personal training sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-gray-400">Nutrition coaching</span>
                </li>
              </ul>
              
              <button className="w-full py-3 rounded-lg bg-white border border-aruna-purple text-aruna-purple font-medium hover:bg-aruna-purple/5 transition duration-300">
                Choose Plan
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-custom p-8 border-2 border-aruna-purple relative hover-scale">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-aruna-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <div className="text-3xl font-bold text-aruna-purple">$89<span className="text-base font-normal text-gray-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Unlimited access to gym facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Unlimited group classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Monthly fitness assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">2 personal training sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-2">✗</span>
                  <span className="text-gray-400">Nutrition coaching</span>
                </li>
              </ul>
              
              <button className="w-full py-3 rounded-lg bg-aruna-purple text-white font-medium hover:bg-aruna-dark-purple transition duration-300">
                Choose Plan
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-custom p-8 border border-gray-100 hover-scale">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Ultimate</h3>
                <div className="text-3xl font-bold text-aruna-purple">$129<span className="text-base font-normal text-gray-600">/month</span></div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Unlimited access to all facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Unlimited group classes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Bi-weekly fitness assessment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">4 personal training sessions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-aruna-purple mr-2">✓</span>
                  <span className="text-gray-600">Monthly nutrition coaching</span>
                </li>
              </ul>
              
              <button className="w-full py-3 rounded-lg bg-white border border-aruna-purple text-aruna-purple font-medium hover:bg-aruna-purple/5 transition duration-300">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
