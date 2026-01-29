// components/About/CompanyProfile.jsx
import { motion } from 'framer-motion';
import { Building2, Award, Target, Users } from 'lucide-react';

const CompanyProfile = () => {
  const profilePoints = [
    {
      icon: Building2,
      title: "Company Profile",
      description: "Established in 2005, we are a leading manufacturer of powder coating systems with 50,000+ sq.ft. manufacturing facility.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Recipient of 'Best Industrial Equipment Manufacturer' award for three consecutive years.",
      color: "amber"
    },
    {
      icon: Target,
      title: "Core Competencies",
      description: "Specialized in custom-engineered solutions for diverse industrial applications.",
      color: "green"
    },
    {
      icon: Users,
      title: "Client Portfolio",
      description: "Serving 500+ clients including Fortune 500 companies across 15+ countries.",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="block text-gray-900">Company</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Profile & Vision
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At <span className="font-semibold text-blue-600">CoatTech Solutions</span>, we've been pioneering 
              the powder coating industry for over 15 years. Our journey began with a simple vision: to provide 
              industries with reliable, efficient, and innovative coating solutions.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, we stand as one of India's most trusted manufacturers, with our systems operating 
              in automotive, aerospace, heavy engineering, and consumer goods industries worldwide.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {profilePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${point.color}-100 flex items-center justify-center mb-4`}>
                    <point.icon className={`text-${point.color}-600`} size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-400 relative">
                {/* This would be your company video/image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="w-20 h-20 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Building2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Our Manufacturing Hub</h3>
                    <p className="text-blue-100">50,000+ sq.ft. state-of-the-art facility</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-4 rounded-xl shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-4 rounded-xl shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white p-4 rounded-xl shadow-lg text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">40+</div>
                  <div className="text-sm text-gray-600">Countries Served</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;