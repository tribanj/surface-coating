// components/Products/ProductEnquiry.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MessageSquare, FileText, Calendar } from 'lucide-react';

const ProductEnquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: '',
    quantity: '1',
    message: '',
    timeline: '1-3 months'
  });

  const products = [
    'Powder Coating Booth',
    'Curing Oven',
    'Pre-Treatment Plant',
    'Conveyor System',
    'CED Coating Plant',
    'Complete Turnkey Project'
  ];

  const timelines = [
    'Immediately',
    '1-3 months',
    '3-6 months',
    '6-12 months',
    'Planning Stage'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Enquiry submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Request Product Details</h2>
              <p className="text-gray-600">Get detailed specifications, pricing, and expert consultation</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="+91 9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Interest *</label>
                  <select
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select Product</option>
                    {products.map((product, index) => (
                      <option key={index} value={product}>{product}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {timelines.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center space-x-4">
                  {[1, 2, 3, '4+'].map((qty) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setFormData({...formData, quantity: qty.toString()})}
                      className={`px-4 py-2 rounded-lg ${
                        formData.quantity === qty.toString()
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {qty}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Additional Requirements</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Tell us about your specific requirements, capacity needs, or any special features you're looking for..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Submit Enquiry</span>
              </button>
            </form>
          </motion.div>

          {/* Contact & Benefits */}
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Why Enquire With Us?</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: MessageSquare,
                    title: "Expert Consultation",
                    description: "Get personalized advice from our coating experts"
                  },
                  {
                    icon: FileText,
                    title: "Detailed Quotation",
                    description: "Transparent pricing with itemized breakdown"
                  },
                  {
                    icon: Calendar,
                    title: "Site Visit",
                    description: "Free site assessment and feasibility study"
                  },
                  {
                    icon: Phone,
                    title: "After Sales Support",
                    description: "Dedicated support team for installation and maintenance"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mr-4">
                      <benefit.icon className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Get Immediate Assistance</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="mr-4" size={20} />
                  <div>
                    <div className="font-medium">Call Us Now</div>
                    <div className="text-lg font-bold">+91 98765 43210</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4" size={20} />
                  <div>
                    <div className="font-medium">Email Us</div>
                    <div className="text-lg font-bold">sales@coattech.com</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-bold mb-4">What Happens Next?</h4>
                <div className="space-y-3">
                  {[
                    'You submit enquiry',
                    'We call within 2 hours',
                    'Detailed discussion',
                    'Site visit scheduled',
                    'Quotation within 24 hours'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductEnquiry;