// components/Products/ProductsFAQ.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Clock, Shield, Truck, Wrench } from 'lucide-react';

const ProductsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the typical delivery time for your equipment?",
      answer: "Standard delivery time is 45-60 days from order confirmation. For complete turnkey projects, it may take 90-120 days depending on the complexity and customization requirements.",
      category: "delivery"
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide complete installation and commissioning services. Our expert team handles everything from site preparation to final testing and operator training.",
      category: "services"
    },
    {
      question: "What warranty do you offer on your products?",
      answer: "We offer 5 years warranty on structure and 1 year on electrical components. Extended warranty plans are available for critical components.",
      category: "warranty"
    },
    {
      question: "Can you customize equipment for specific requirements?",
      answer: "Absolutely! We specialize in custom solutions. Our engineering team can modify designs to meet specific capacity, space, or process requirements.",
      category: "customization"
    },
    {
      question: "What after-sales support do you provide?",
      answer: "We provide 24/7 technical support, AMC services, spare parts availability, and regular maintenance check-ups. Our service engineers are available pan-India.",
      category: "support"
    },
    {
      question: "How energy efficient are your systems?",
      answer: "Our systems are designed for optimal energy efficiency, saving up to 40% compared to conventional systems. We incorporate heat recovery systems and intelligent controls.",
      category: "efficiency"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: HelpCircle, count: faqs.length },
    { id: 'delivery', name: 'Delivery & Installation', icon: Truck, count: 2 },
    { id: 'services', name: 'Services', icon: Wrench, count: 2 },
    { id: 'warranty', name: 'Warranty', icon: Shield, count: 1 },
    { id: 'support', name: 'Support', icon: Clock, count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <category.icon size={18} />
              <span>{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.id
                  ? 'bg-white/20'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 shadow-lg border border-blue-200'
                      : 'bg-white shadow-md hover:shadow-lg'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        openIndex === index
                          ? 'bg-blue-600 text-white'
                          : 'bg-blue-100 text-blue-600'
                      }`}>
                        <HelpCircle size={20} />
                      </div>
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                    </div>
                    <ChevronDown 
                      className={`transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      size={20}
                    />
                  </div>
                  
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-8">
              Our technical team is ready to assist you with any specific queries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Call Now: +91 98765 43210
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Schedule a Call Back
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsFAQ;