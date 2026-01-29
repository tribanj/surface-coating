// components/Contact/ContactHero.jsx
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

const ContactHero = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
      subtext: "Mon-Sat, 9AM-6PM",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "info@coattech.com",
      subtext: "Response within 2 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "Industrial Area, Faridabad",
      subtext: "Haryana, India",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay
            }}
          />
        ))}
      </div>

      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-cyan-50/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-blue-700 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <MessageSquare size={16} />
              <span className="text-sm font-medium">Let's Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Get in</span>
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Touch With Us
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Have questions about our powder coating solutions? 
              We're here to help transform your manufacturing process.
            </p>
            
            {/* Contact Methods */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-white/20">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center mb-3`}>
                      <method.icon className="text-white" size={24} />
                    </div>
                    <div className="font-bold mb-1">{method.title}</div>
                    <div className="text-sm text-gray-600">{method.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{method.subtext}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex items-center space-x-8">
              {[
                { value: "98%", label: "Response Rate" },
                { value: "< 2h", label: "Avg Response Time" },
                { value: "500+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - 3D Contact Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              {/* 3D Sphere Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/20 to-blue-600/20 backdrop-blur-sm">
                {/* Animated Sphere */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ 
                      rotateY: 360,
                      rotateX: 360 
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="relative w-80 h-80"
                  >
                    {/* Outer Sphere */}
                    <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"></div>
                    
                    {/* Inner Networks */}
                    <div className="absolute inset-8 rounded-full border border-cyan-400/20"></div>
                    <div className="absolute inset-16 rounded-full border border-blue-400/10"></div>
                    
                    {/* Connection Points */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <motion.div
                        key={angle}
                        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        style={{
                          top: `${Math.sin(angle * Math.PI / 180) * 100 + 100}px`,
                          left: `${Math.cos(angle * Math.PI / 180) * 100 + 100}px`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: angle * 0.1
                        }}
                      />
                    ))}
                    
                    {/* Center Connection Hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                    
                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                        <line
                          key={angle}
                          x1="50%"
                          y1="50%"
                          x2={`${Math.cos(angle * Math.PI / 180) * 50 + 50}%`}
                          y2={`${Math.sin(angle * Math.PI / 180) * 50 + 50}%`}
                          stroke="url(#gradient)"
                          strokeWidth="1"
                          strokeOpacity="0.3"
                        />
                      ))}
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#06B6D4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                </div>
                
                {/* Floating Info Cards */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs"
                >
                  <div className="text-sm font-semibold text-blue-600">Quick Response</div>
                  <div className="text-xs text-gray-600">We guarantee a response within 2 working hours</div>
                </motion.div>
                
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-xs"
                >
                  <div className="text-sm font-semibold text-blue-600">Expert Support</div>
                  <div className="text-xs text-gray-600">Technical experts available 24/7 for urgent queries</div>
                </motion.div>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "24/7", label: "Support", icon: "⏰" },
                  { value: "15+", label: "Experts", icon: "👨‍💼" },
                  { value: "5min", label: "Callback", icon: "📞" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.9 }}
                    className="bg-white p-4 rounded-xl shadow-lg text-center"
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="font-bold text-blue-600">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;