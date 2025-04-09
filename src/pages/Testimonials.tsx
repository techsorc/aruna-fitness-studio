import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      quote: "Aruna Fitness transformed my life! I lost 30 pounds and gained confidence I never knew I had. The trainers are so supportive and really care about helping you achieve your goals.",
      beforeImage: "https://picsum.photos/seed/aruna1/600/400",
      afterImage: "https://picsum.photos/seed/aruna2/600/400"
    },
    {
      name: "Emily Rodriguez",
      quote: "The supportive environment at Aruna helped me achieve fitness goals I thought were impossible. I feel stronger, healthier, and more confident than ever before.",
      beforeImage: "https://picsum.photos/seed/aruna3/600/400",
      afterImage: "https://picsum.photos/seed/aruna4/600/400"
    },
    {
      name: "Michelle Park",
      quote: "Not only did I gain physical strength, but mental strength as well. Forever grateful for the amazing community of women at Aruna Fitness Studio!",
      beforeImage: "https://picsum.photos/seed/aruna5/600/400",
      afterImage: "https://picsum.photos/seed/aruna6/600/400"
    },
    {
      name: "Jennifer Williams",
      quote: "I joined Aruna after having my second child and was amazed at how quickly I was able to get back in shape. The trainers really understand women's bodies and health needs.",
      beforeImage: "https://picsum.photos/seed/aruna9/600/400",
      afterImage: "https://picsum.photos/seed/aruna10/600/400"
    },
    {
      name: "Rebecca Chen",
      quote: "As someone who was intimidated by gyms, Aruna's ladies-only environment was exactly what I needed. I've lost 25 pounds and found a community of supportive friends.",
      beforeImage: "https://picsum.photos/seed/aruna11/600/400",
      afterImage: "https://picsum.photos/seed/aruna12/600/400"
    },
    {
      name: "Melissa Taylor",
      quote: "The nutrition coaching combined with personal training gave me the complete package to transform my health. I've never felt better in my life!",
      beforeImage: "https://picsum.photos/seed/aruna13/600/400",
      afterImage: "https://picsum.photos/seed/aruna14/600/400"
    }
  ];

  return (
    <Layout>
      <div className="py-12">
        <div className="container-custom">
          <SectionHeading 
            title="Success Stories" 
            subtitle="Real women, real results. See how Aruna Fitness Studio has helped transform lives." 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                quote={testimonial.quote}
                beforeImage={testimonial.beforeImage}
                afterImage={testimonial.afterImage}
              />
            ))}
          </div>
          
          <div className="mt-16 bg-aruna-gray rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Share Your Success Story</h3>
            <p className="text-gray-600 text-center mb-8">
              Have you achieved amazing results with Aruna Fitness Studio? We'd love to feature your transformation and inspire others on their fitness journey.
            </p>
            <div className="flex justify-center">
              <button className="bg-aruna-purple hover:bg-aruna-dark-purple text-white py-3 px-6 rounded-lg font-medium transition duration-300">
                Submit Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
