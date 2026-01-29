// components/About/MachineSlider.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import machineImg from '../../assets/coating machine.webp';
const MachineSlider = () => {
  const machines = [
    {
      id: 1,
      title: "Powder Coating Booth",
      category: "Booth Systems",
      description: "Automated powder application with 99.8% recovery efficiency",
      specs: ["Auto Powder Recovery", "PLC Control", "Energy Efficient"],
      image: machineImg
    },
    {
      id: 2,
      title: "Industrial Curing Oven",
      category: "Oven Systems",
      description: "Precision temperature control for uniform curing",
      specs: ["Gas/Diesel/Electric", "±2°C Accuracy", "Quick Heat-up"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200"
    },
    {
      id: 3,
      title: "Pre-Treatment Plant",
      category: "Surface Preparation",
      description: "Complete 7-stage chemical treatment process",
      specs: ["Dip & Spray Types", "Multi-metal Capable", "Auto Dosing"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200"
    },
    {
      id: 4,
      title: "Overhead Conveyor",
      category: "Material Handling",
      description: "Heavy-duty conveyor systems for seamless workflow",
      specs: ["500-5000kg Capacity", "Variable Speed", "Low Maintenance"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200"
    },
    {
      id: 5,
      title: "CED Coating Plant",
      category: "E-coating",
      description: "Advanced electro-deposition coating systems",
      specs: ["Uniform Coverage", "Corrosion Resistant", "Auto Control"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % machines.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + machines.length) % machines.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Manufacturing Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art coating machines engineered for precision and durability
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Slider */}
          <div 
            className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"
                  style={{
                    backgroundImage: `url(${machines[currentIndex].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl ml-12 text-white">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                      <span className="text-sm font-medium">{machines[currentIndex].category}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {machines[currentIndex].title}
                    </h3>
                    <p className="text-lg text-blue-100 mb-6">
                      {machines[currentIndex].description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {machines[currentIndex].specs.map((spec, index) => (
                        <li key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                      <ZoomIn size={20} />
                      View Technical Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group"
              aria-label="Previous machine"
            >
              <ChevronLeft className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all group"
              aria-label="Next machine"
            >
              <ChevronRight className="text-white group-hover:scale-110 transition-transform" size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {machines.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-400 w-8' : 'bg-white/50 hover:bg-white/80'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Gallery */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {machines.map((machine, index) => (
              <motion.button
                key={machine.id}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-24 rounded-xl overflow-hidden transition-all ${index === currentIndex ? 'ring-2 ring-blue-500 ring-offset-2' : 'opacity-80 hover:opacity-100'}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${machine.image})` }}
                />
                <div className={`absolute inset-0 ${index === currentIndex ? 'bg-blue-600/30' : 'bg-black/40'}`} />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-xs font-medium text-white truncate block">
                    {machine.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachineSlider;