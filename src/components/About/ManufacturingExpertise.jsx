// components/About/ManufacturingExpertise.jsx
import { motion } from 'framer-motion';
import { Factory, Cog, Cpu, Shield, Zap, Package } from 'lucide-react';

const ManufacturingExpertise = () => {
  const expertiseAreas = [
    {
      icon: Factory,
      title: "State-of-the-Art Facility",
      description: "50,000+ sq.ft. manufacturing plant equipped with CNC machines, laser cutters, and automated assembly lines.",
      stats: "100+ Machines"
    },
    {
      icon: Cog,
      title: "Engineering Excellence",
      description: "In-house R&D department with 25+ engineers specializing in mechanical, electrical, and automation systems.",
      stats: "25+ Engineers"
    },
    {
      icon: Cpu,
      title: "Automation & Control",
      description: "Advanced PLC and SCADA systems for precise control and monitoring of all coating parameters.",
      stats: "PLC/SCADA Integrated"
    },
    {
      icon: Shield,
      title: "Quality Fabrication",
      description: "ISO-certified fabrication processes using premium-grade materials for superior durability.",
      stats: "ISO Certified"
    },
    {
      icon: Zap,
      title: "Energy Efficiency",
      description: "Energy-optimized designs that reduce operational costs by up to 40% compared to conventional systems.",
      stats: "40% Energy Saving"
    },
    {
      icon: Package,
      title: "Turnkey Solutions",
      description: "End-to-end project execution from design to installation and commissioning.",
      stats: "500+ Projects"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Design & Engineering",
      description: "Custom 3D modeling and simulation for optimal performance"
    },
    {
      step: "02",
      title: "Material Selection",
      description: "Premium-grade materials sourced from certified suppliers"
    },
    {
      step: "03",
      title: "Precision Fabrication",
      description: "CNC machining and robotic welding for perfect accuracy"
    },
    {
      step: "04",
      title: "Quality Inspection",
      description: "Multi-stage inspection at every manufacturing step"
    },
    {
      step: "05",
      title: "Assembly & Testing",
      description: "Complete assembly followed by rigorous performance testing"
    },
    {
      step: "06",
      title: "Installation Support",
      description: "Expert installation and commissioning at client site"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Manufacturing & Engineering Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combining traditional craftsmanship with cutting-edge technology
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <area.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                {area.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Process Timeline */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Our Manufacturing Process</h3>
            <p className="text-gray-600">A systematic approach ensuring quality at every step</p>
          </div>
          
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg text-center border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                    {process.step}
                  </div>
                  <h4 className="font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.description}</p>
                </div>
                
                {/* Connector line for mobile */}
                {index < processes.length - 1 && (
                  <div className="lg:hidden absolute top-1/2 right-0 w-6 h-0.5 bg-gray-300 -translate-y-1/2 translate-x-3"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Advanced Technology Integration</h3>
              <p className="text-blue-100 mb-6">
                We integrate Industry 4.0 technologies including IoT sensors, predictive maintenance, 
                and real-time monitoring systems in all our equipment.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["IoT Enabled", "AI Predictive", "Cloud Monitoring", "Mobile Control"].map((tech, idx) => (
                  <div key={idx} className="flex items-center bg-white/10 p-3 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Cpu size={64} className="mx-auto mb-4 opacity-50" />
                  <div className="text-xl font-bold">Smart Factory Ready</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ✅ EXPORT AS DEFAULT
export default ManufacturingExpertise;