
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="py-12">
        <div className="container-custom">
          <SectionHeading 
            title="Contact Us" 
            subtitle="We'd love to hear from you! Reach out with any questions or to schedule a visit." 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-custom p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <ContactForm />
              </div>
              
              <div className="bg-white rounded-2xl shadow-custom p-8">
                <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00425!3d40.712775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3b79a1dc4!2s123%20Example%20St%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1674338800000!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[300px] rounded-lg"
                    title="Aruna Fitness Studio Location"
                  ></iframe>
                </div>
              </div>
            </div>
            
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
                  <div className="w-12 h-12 rounded-full bg-aruna-pink flex items-center justify-center mb-4">
                    <MapPin className="text-aruna-purple" size={20} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Location</h4>
                  <p className="text-gray-600">
                    123 Fitness Avenue<br />
                    Wellness City, ZZ 12345<br />
                    United States
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
                  <div className="w-12 h-12 rounded-full bg-aruna-blue flex items-center justify-center mb-4">
                    <Phone className="text-aruna-purple" size={20} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Phone</h4>
                  <p className="text-gray-600">
                    Main: (123) 456-7890<br />
                    Support: (123) 456-7891
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
                  <div className="w-12 h-12 rounded-full bg-aruna-peach flex items-center justify-center mb-4">
                    <Mail className="text-aruna-purple" size={20} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Email</h4>
                  <p className="text-gray-600">
                    info@arunafitness.com<br />
                    support@arunafitness.com
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-custom p-6 hover-scale">
                  <div className="w-12 h-12 rounded-full bg-aruna-light-purple flex items-center justify-center mb-4">
                    <Clock className="text-aruna-purple" size={20} />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Hours</h4>
                  <p className="text-gray-600">
                    Monday-Friday: 6:00 AM - 9:00 PM<br />
                    Saturday: 8:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
              
              <div className="bg-aruna-gray rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Is Aruna Fitness Studio women-only?</h4>
                    <p className="text-gray-600">
                      Yes, we are exclusively for women to provide a comfortable and supportive environment for all our members.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Do I need to sign a long-term contract?</h4>
                    <p className="text-gray-600">
                      We offer flexible membership options, including month-to-month plans with no long-term commitment required.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Do you offer childcare services?</h4>
                    <p className="text-gray-600">
                      Yes, we provide childcare services during select hours. Please contact us for current availability and scheduling.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Can I try before I join?</h4>
                    <p className="text-gray-600">
                      Absolutely! We offer a free day pass for new visitors. Contact us to schedule your visit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
