// components/Contact/ContactCTAs.jsx
import { motion } from 'framer-motion';
import { Calendar, Download, Video, Headphones, Truck, Wrench } from 'lucide-react';

const ContactCTAs = () => {
  const ctas = [
    {
      icon: Calendar,
      title: "Schedule Site Visit",
      description: "Book a visit to our factory or your site",
      color: "from-blue-500 to-cyan-500",
      action: "Book Now"
    },
    {
      icon: Video,
      title: "Virtual Demo",
      description: "Live product demonstration online",
      color: "from-purple-500 to-pink-500",
      action: "Schedule Demo"
    },
    {
      icon: Download,
      title: "Download Catalog",
      description: "Complete product catalog & specs",
      color: "from-green-500 to-emerald-500",
      action: "Download PDF"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "24/7 technical assistance",
      color: "from-orange-500 to-red-500",
      action: "Get Support"
    },
    {
      icon: Truck,
      title: "Service Request",
      description: "Maintenance & service booking",
      color: "from-indigo-500 to-purple-500",
      action: "Request Service"
    },
    {
      icon: Wrench,
      title: "Spare Parts",
      description: "Order genuine spare parts",
      color: "from-amber-500 to-orange-500",
      action: "Browse Parts"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Other Ways to Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive support and service options
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ctas.map((cta, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${cta.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <cta.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cta.title}</h3>
                <p className="text-gray-600 mb-4">{cta.description}</p>
                <button className={`w-full py-3 rounded-lg font-medium bg-gradient-to-r ${cta.color} text-white hover:shadow-lg transition-all duration-300`}>
                  {cta.action}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">⚠️ Emergency Support</h3>
            <p className="text-red-100 mb-6">
              For urgent technical issues or breakdowns, our emergency team is available 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors">
                Emergency Hotline: +91 98765 99999
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                WhatsApp Emergency
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTAs;