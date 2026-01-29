// components/About/MissionVision.jsx
import { motion } from 'framer-motion';
import { Target, Eye, Star, TrendingUp } from 'lucide-react';

const MissionVision = () => {
  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide innovative, reliable, and efficient coating solutions that enhance our clients' productivity while maintaining the highest standards of quality and environmental responsibility.",
      color: "from-blue-500 to-blue-600",
      points: [
        "Innovation in coating technology",
        "Sustainable manufacturing practices",
        "Customer-centric approach",
        "Global quality standards"
      ]
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be the global leader in powder coating solutions, recognized for our technological excellence, environmental stewardship, and unwavering commitment to customer success.",
      color: "from-cyan-500 to-blue-500",
      points: [
        "Global market leadership",
        "Technological excellence",
        "Environmental sustainability",
        "Industry 4.0 integration"
      ]
    },
    {
      icon: Star,
      title: "Core Values",
      description: "Integrity, innovation, and excellence form the foundation of everything we do. We believe in building lasting relationships through transparency and exceptional service.",
      color: "from-purple-500 to-pink-500",
      points: [
        "Integrity & Transparency",
        "Continuous Innovation",
        "Operational Excellence",
        "Team Collaboration"
      ]
    },
    {
      icon: TrendingUp,
      title: "Quality Promise",
      description: "Every system we manufacture undergoes rigorous testing to ensure it meets international standards and exceeds customer expectations in performance and durability.",
      color: "from-green-500 to-emerald-600",
      points: [
        "ISO 9001:2015 Certified",
        "Rigorous Testing",
        "Lifetime Support",
        "Regular Upgrades"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Guiding Principles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving excellence through clear vision, strong mission, and unwavering values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <card.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600 mb-6">{card.description}</p>
                <ul className="space-y-2">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${card.color} mr-3`}></div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Our Journey Towards 2030</h3>
            <p className="text-gray-600">Strategic roadmap for growth and innovation</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "2024", goal: "AI Integration", status: "In Progress" },
              { year: "2026", goal: "Global Expansion", status: "Planning" },
              { year: "2028", goal: "Carbon Neutral", status: "Target" },
              { year: "2030", goal: "Industry Leader", status: "Vision" }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                <div className="font-semibold mb-2">{item.goal}</div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  item.status === "In Progress" ? "bg-green-100 text-green-800" :
                  item.status === "Planning" ? "bg-blue-100 text-blue-800" :
                  item.status === "Target" ? "bg-amber-100 text-amber-800" :
                  "bg-purple-100 text-purple-800"
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;