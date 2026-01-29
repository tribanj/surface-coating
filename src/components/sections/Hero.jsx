// components/Sections/Hero.jsx
import { motion } from 'framer-motion';
import { Play, Shield, Zap, Users, CheckCircle, Clock, Globe, ChevronRight } from 'lucide-react';

// Stats data define karenge
const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '1000+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' }
];

// Features data
const features = [
  { icon: Shield, text: 'ISO Certified Quality', color: 'green' },
  { icon: CheckCircle, text: 'End-to-End Solutions', color: 'blue' },
  { icon: Clock, text: 'On-Time Delivery', color: 'orange' },
  { icon: Globe, text: 'Pan-India Service', color: 'purple' }
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                           linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Zap size={16} />
              <span className="text-sm font-medium">Industry Leader Since 2005</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Advanced</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Coating Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transform your production with AI-optimized powder coating systems 
              and turnkey industrial solutions. Quality that withstands the test of time.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <span className="relative z-10 flex items-center">
                  Explore Solutions
                  <ChevronRight className="ml-2" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 group">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl transition-shadow group-hover:scale-110">
                  <Play size={20} className="text-blue-600" fill="currentColor" />
                </div>
                <div className="text-left">
                  <div className="font-medium">Watch Demo</div>
                  <div className="text-sm text-gray-500">2 min video</div>
                </div>
              </button>
            </div>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center p-4 rounded-xl bg-white/50 backdrop-blur-sm"
                >
                  <div className={`w-10 h-10 rounded-lg bg-${feature.color}-100 flex items-center justify-center mb-2`}>
                    <feature.icon className={`text-${feature.color}-600`} size={20} />
                  </div>
                  <div className="text-sm font-medium">{feature.text}</div>
                </motion.div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right - 3D Product Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl shadow-2xl overflow-hidden">
              {/* Product visualization area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="relative w-80 h-80"
                >
                  {/* Gear 1 */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-8 border-blue-500/30 rounded-full"></div>
                  {/* Gear 2 */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-8 border-cyan-500/40 rounded-full"></div>
                  {/* Gear 3 */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-8 border-blue-600/50 rounded-full"></div>
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                </motion.div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-500" size={16} />
                  <span className="text-sm font-medium">ISO 9001:2015</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <Users className="text-blue-500" size={16} />
                  <span className="text-sm font-medium">500+ Happy Clients</span>
                </div>
              </motion.div>
              
              {/* Animated particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-cyan-500'}`}
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`
                  }}
                />
              ))}
            </div>
            
            {/* Product labels */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {['Powder Booth', 'Coating Oven', 'PT Plant'].map((label, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="text-sm font-medium text-gray-800">{label}</div>
                  <div className="text-xs text-gray-500 mt-1">Learn more →</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;