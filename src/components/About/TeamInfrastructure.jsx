// components/About/TeamInfrastructure.jsx
import { motion } from 'framer-motion';
import { Users, Building, Cpu, Truck, Wrench, Heart, Award, FileCheck  } from 'lucide-react';

const TeamInfrastructure = () => {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      experience: "25+ Years",
      specialization: "Industrial Automation",
      quote: "Quality is not an act, it's a habit."
    },
    {
      name: "Priya Verma",
      role: "Chief Technology Officer",
      experience: "18+ Years",
      specialization: "Coating Technology",
      quote: "Innovation distinguishes between a leader and a follower."
    },
    {
      name: "Amit Patel",
      role: "Head of Manufacturing",
      experience: "20+ Years",
      specialization: "Precision Engineering",
      quote: "Excellence is the gradual result of always striving to do better."
    },
    {
      name: "Sunita Reddy",
      role: "Quality Head",
      experience: "15+ Years",
      specialization: "Quality Systems",
      quote: "Quality means doing it right when no one is looking."
    }
  ];

  const infrastructure = [
    {
      icon: Building,
      title: "Manufacturing Plant",
      description: "50,000+ sq.ft. facility with separate bays for fabrication, assembly, and testing",
      specs: ["CNC Machines", "Laser Cutters", "Robotic Welding"]
    },
    {
      icon: Cpu,
      title: "R&D Center",
      description: "Dedicated research facility with testing labs and simulation software",
      specs: ["3D Modeling", "Flow Simulation", "Thermal Analysis"]
    },
    {
      icon: Truck,
      title: "Logistics Hub",
      description: "In-house logistics department for timely delivery across India",
      specs: ["Heavy Transport", "Export Packing", "Installation Teams"]
    },
    {
      icon: Wrench,
      title: "Service Center",
      description: "24/7 service support with dedicated spare parts inventory",
      specs: ["Emergency Support", "AMC Services", "Operator Training"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Team Strength & Infrastructure
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by expert professionals and supported by world-class infrastructure
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <Users className="text-blue-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold">Leadership Team</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
              >
                <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-400 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="text-white" size={64} />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="font-bold text-lg">{member.name}</div>
                      <div className="text-sm text-blue-600">{member.role}</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-500">Experience</div>
                    <div className="font-bold text-blue-600">{member.experience}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Specialization</div>
                    <div className="font-medium">{member.specialization}</div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-start">
                      <Heart className="text-red-400 mr-2 mt-1" size={16} />
                      <div className="text-sm text-gray-600 italic">"{member.quote}"</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infrastructure */}
        <div>
          <div className="flex items-center justify-center mb-8">
            <Building className="text-blue-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold">Our Infrastructure</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {infrastructure.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                    <facility.icon className="text-blue-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{facility.title}</h4>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {facility.specs.map((spec, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Employee Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Human Capital</h3>
            <p className="text-blue-100">Skilled professionals driving our success</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Total Employees", icon: Users },
              { value: "85%", label: "Technical Staff", icon: Cpu },
              { value: "12+", label: "Average Experience", icon: Award },
              { value: "100%", label: "Certified Training", icon: FileCheck }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-lg">
              <span className="font-bold">Continuous Learning:</span> Annual training programs, 
              skill development workshops, and certifications keep our team at the forefront of technology
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamInfrastructure;