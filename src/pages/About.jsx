// pages/About.jsx
import { motion } from 'framer-motion';
import CompanyProfile from '../components/About/CompanyProfile';
import MissionVision from '../components/About/MissionVision';
import ManufacturingExpertise from '../components/About/ManufacturingExpertise';
import QualitySafety from '../components/About/QualitySafety';
import TeamInfrastructure from '../components/About/TeamInfrastructure';
import MachineSlider from '../components/About/MachineSlider';
import StatsCounter from '../components/About/StatsCounter';

const About = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Since 2005</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block text-gray-900">Transforming Industries with</span>
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Advanced Coating Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A legacy of excellence in manufacturing precision powder coating systems, 
              setting benchmarks in quality, innovation, and customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Machine Image Slider */}
      <MachineSlider />

      {/* Stats Counter */}
      <StatsCounter />

      {/* Company Profile */}
      <CompanyProfile />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Manufacturing Expertise */}
      <ManufacturingExpertise />

      {/* Quality & Safety */}
      <QualitySafety />

      {/* Team & Infrastructure */}
      <TeamInfrastructure />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Coating Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Partner with India's leading powder coating equipment manufacturer
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Request a Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;