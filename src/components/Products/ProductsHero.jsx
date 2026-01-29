// components/Products/ProductsHero.jsx
import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, TrendingUp } from 'lucide-react';

const ProductsHero = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "ISO 9001:2015 certified manufacturing"
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Up to 40% energy savings"
    },
    {
      icon: Shield,
      title: "Durable Construction",
      description: "Built to last 15+ years"
    },
    {
      icon: TrendingUp,
      title: "High Performance",
      description: "99.8% powder recovery efficiency"
    }
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Industry Leading</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced
              <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
                Coating Solutions
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-8">
              Discover our comprehensive range of powder coating systems, 
              engineered for precision, efficiency, and durability.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Catalog
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Book Demo
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <feature.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{feature.title}</div>
                    <div className="text-sm text-blue-200">{feature.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* 3D Product Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-cyan-700">
                {/* Animated gears */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-80 h-80"
                  >
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-8 border-white/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-8 border-cyan-300/20 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-8 border-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-300 to-white rounded-full"></div>
                  </motion.div>
                </div>
                
                {/* Product labels */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-bold text-lg">Powder Coating Booth</div>
                      <div className="text-cyan-200">Automated Recovery System</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">₹8.5L</div>
                      <div className="text-sm text-cyan-200">Starting Price</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "99.8%", label: "Recovery" },
                  { value: "24/7", label: "Operation" },
                  { value: "5Y", label: "Warranty" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="bg-white p-4 rounded-xl shadow-lg text-center"
                  >
                    <div className="text-xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
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

export default ProductsHero;