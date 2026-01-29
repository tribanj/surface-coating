// components/About/QualitySafety.jsx
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Award, FileCheck, AlertTriangle, Users } from 'lucide-react';

const QualitySafety = () => {
  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management System" },
    { name: "ISO 14001:2015", description: "Environmental Management" },
    { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
    { name: "CE Certification", description: "European Conformity" },
  ];

  const qualityProcesses = [
    {
      icon: FileCheck,
      title: "Raw Material Inspection",
      description: "All materials undergo chemical and physical testing before use"
    },
    {
      icon: CheckCircle,
      title: "In-Process Quality Control",
      description: "200+ checkpoints during manufacturing process"
    },
    {
      icon: Shield,
      title: "Final Testing",
      description: "48-hour continuous operation testing before dispatch"
    },
    {
      icon: Award,
      title: "Performance Certification",
      description: "Each machine certified for specified performance parameters"
    }
  ];

  const safetyFeatures = [
    "Emergency stop buttons at multiple locations",
    "Automatic fire suppression systems",
    "Gas leak detection sensors",
    "Over-temperature protection",
    "Electrical safety interlocks",
    "Operator safety training programs"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quality Standards & Safety Practices
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and safety is reflected in every product we deliver
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Quality Assurance */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mr-4">
                <Award className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Quality Assurance</h3>
            </div>
            <p className="text-gray-600 mb-8">
              We follow a stringent 7-stage quality control process that ensures every machine 
              meets international standards. Our quality management system is certified to 
              ISO 9001:2015, and we maintain traceability for every component used.
            </p>
            
            <div className="space-y-6">
              {qualityProcesses.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start bg-gray-50 p-4 rounded-xl"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <process.icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{process.title}</h4>
                    <p className="text-sm text-gray-600">{process.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Safety Standards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mr-4">
                <Shield className="text-red-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Safety Standards</h3>
            </div>
            <p className="text-gray-600 mb-8">
              Safety is our top priority. All our machines incorporate multiple safety 
              features and comply with international safety standards including 
              ISO 45001:2018 for occupational health and safety.
            </p>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl">
              <h4 className="font-bold mb-4 flex items-center">
                <AlertTriangle className="text-orange-500 mr-2" size={20} />
                Key Safety Features
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Certifications</h3>
            <p className="text-gray-600">Internationally recognized quality and safety certifications</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="text-blue-600" size={28} />
                </div>
                <h4 className="font-bold text-lg mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
          
          {/* Quality Metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "99.7%", label: "Quality Acceptance Rate" },
              { value: "0.02%", label: "Customer Rejection Rate" },
              { value: "48h", label: "Testing Duration per Machine" },
              { value: "5 Years", label: "Warranty Period" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySafety;