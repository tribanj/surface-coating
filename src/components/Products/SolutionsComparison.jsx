// components/Products/SolutionsComparison.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, TrendingUp, Zap, Shield, DollarSign } from 'lucide-react';

const SolutionsComparison = () => {
  const [selectedTab, setSelectedTab] = useState('standard');

  const solutions = [
    {
      id: 'economy',
      name: 'Economy',
      description: 'Basic solution for startups',
      price: '₹5-10L',
      features: [
        { text: 'Manual Powder Recovery', included: true },
        { text: 'Basic Temperature Control', included: true },
        { text: 'Manual Conveyor', included: true },
        { text: 'Auto Powder Recovery', included: false },
        { text: 'PLC Control System', included: false },
        { text: 'Energy Recovery System', included: false }
      ],
      bestFor: ['Small Workshops', 'Low Volume', 'Budget Projects']
    },
    {
      id: 'standard',
      name: 'Standard',
      description: 'Most popular choice',
      price: '₹15-25L',
      features: [
        { text: 'Auto Powder Recovery', included: true },
        { text: 'PLC Control System', included: true },
        { text: 'Power Conveyor', included: true },
        { text: 'Energy Recovery', included: true },
        { text: 'IoT Monitoring', included: false },
        { text: 'AI Optimization', included: false }
      ],
      bestFor: ['Medium Industries', 'Steady Production', 'Quality Focus'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Advanced automation',
      price: '₹30-50L',
      features: [
        { text: 'Auto Powder Recovery', included: true },
        { text: 'Advanced PLC/SCADA', included: true },
        { text: 'Robotic Conveyor', included: true },
        { text: 'Energy Recovery', included: true },
        { text: 'IoT Monitoring', included: true },
        { text: 'AI Optimization', included: true }
      ],
      bestFor: ['Large Industries', 'High Volume', 'Smart Factory']
    }
  ];

  const selectedSolution = solutions.find(s => s.id === selectedTab) || solutions[1];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Solution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare different packages to find the perfect fit for your needs
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-2xl">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setSelectedTab(solution.id)}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                  selectedTab === solution.id
                    ? 'bg-white shadow-lg text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {solution.name}
              </button>
            ))}
        </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Solution Details */}
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{selectedSolution.name}</h3>
                <p className="text-gray-600">{selectedSolution.description}</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{selectedSolution.price}</div>
                <div className="text-sm text-gray-500">Starting Price</div>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {selectedSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                    feature.included ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {feature.included ? (
                      <Check size={14} className="text-green-600" />
                    ) : (
                      <X size={14} className="text-red-600" />
                    )}
                  </div>
                  <span className={feature.included ? '' : 'text-gray-400'}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Best For */}
            <div>
              <h4 className="font-bold mb-3 flex items-center">
                <TrendingUp className="mr-2" size={18} />
                Best For
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSolution.bestFor.map((item, index) => (
                  <span key={index} className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
            <div className="space-y-6">
              {[
                {
                  icon: Zap,
                  title: "Energy Efficiency",
                  description: "Save up to 40% on energy costs with our optimized systems"
                },
                {
                  icon: Shield,
                  title: "Durability",
                  description: "Built with premium materials for 15+ years of service"
                },
                {
                  icon: DollarSign,
                  title: "Cost Effective",
                  description: "High ROI with low maintenance and operational costs"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                    <benefit.icon className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ROI Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6"
            >
              <h4 className="font-bold mb-4">ROI Calculator</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Current Monthly Cost</span>
                    <span className="font-semibold">₹1,50,000</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 w-3/4"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>With Our System</span>
                    <span className="font-semibold text-green-600">₹90,000</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-2/5"></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-green-100">
                  <div className="flex justify-between font-bold">
                    <span>Monthly Savings</span>
                    <span className="text-green-600">₹60,000</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsComparison;