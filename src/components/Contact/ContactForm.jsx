// components/Contact/ContactForm.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, XCircle, Loader2, Sparkles } from 'lucide-react';

const ContactForm = ({ setFormSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    productInterest: '',
    timeline: '1-3 months'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subjects = [
    'Product Inquiry',
    'Technical Support',
    'Request a Quote',
    'Service & Maintenance',
    'Partnership Opportunity',
    'Other'
  ];

  const products = [
    'Powder Coating Booth',
    'Curing Oven',
    'Pre-Treatment Plant',
    'Conveyor System',
    'Complete Turnkey Project',
    'Spare Parts'
  ];

  const timelines = [
    'Immediately',
    'Within 1 month',
    '1-3 months',
    '3-6 months',
    'Planning Stage'
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Invalid phone number';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setErrors({});
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        productInterest: '',
        timeline: '1-3 months'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-3xl shadow-2xl overflow-hidden"
    >
      {/* Form Header */}
      <div className="relative p-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="absolute top-4 right-4">
          <Sparkles className="text-yellow-300" size={24} />
        </div>
        <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
        <p className="text-blue-100">We'll get back to you within 2 hours</p>
        
        {/* Progress Indicator */}
        <div className="mt-6">
          <div className="flex justify-between text-sm mb-2">
            <span>Step 1 of 2</span>
            <span>50% Complete</span>
          </div>
          <div className="w-full h-2 bg-white/30 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '50%' }}
              animate={{ width: isSubmitting ? '100%' : '50%' }}
              transition={{ duration: 2 }}
              className="h-full bg-yellow-300"
            />
          </div>
        </div>
      </div>

      {/* Success Message */}
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="m-6 p-4 bg-green-50 border border-green-200 rounded-xl"
        >
          <div className="flex items-center">
            <CheckCircle className="text-green-500 mr-3" size={24} />
            <div>
              <div className="font-bold text-green-800">Message Sent Successfully!</div>
              <div className="text-green-600 text-sm">Our team will contact you within 2 hours.</div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="John Doe"
              />
              {errors.name && (
                <div className="absolute right-3 top-3 text-red-500">
                  <XCircle size={20} />
                </div>
              )}
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address *
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="john@company.com"
              />
              {errors.email && (
                <div className="absolute right-3 top-3 text-red-500">
                  <XCircle size={20} />
                </div>
              )}
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                +91
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full pl-16 pr-4 py-3 rounded-xl border ${
                  errors.phone ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all`}
                placeholder="98765 43210"
              />
              {errors.phone && (
                <div className="absolute right-3 top-3 text-red-500">
                  <XCircle size={20} />
                </div>
              )}
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Your Company"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Subject *
            </label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.subject ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white`}
            >
              <option value="">Select a subject</option>
              {subjects.map((subject, index) => (
                <option key={index} value={subject}>{subject}</option>
              ))}
            </select>
            {errors.subject && (
              <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
            )}
          </div>

          {/* Product Interest */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Product Interest
            </label>
            <select
              name="productInterest"
              value={formData.productInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
            >
              <option value="">Select product (optional)</option>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline Selection */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-3">
            Project Timeline
          </label>
          <div className="flex flex-wrap gap-3">
            {timelines.map((timeline, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setFormData({...formData, timeline})}
                className={`px-4 py-2 rounded-lg transition-all ${
                  formData.timeline === timeline
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {timeline}
              </button>
            ))}
          </div>
        </div>

        {/* Message Field */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Your Message
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Tell us about your requirements, project details, or any specific questions you have..."
          />
        </div>

        {/* File Upload (Optional) */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">
            Attach Files (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
            <div className="text-gray-400 mb-2">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div className="text-gray-600">Drop files here or click to upload</div>
            <div className="text-sm text-gray-500 mt-1">PDF, DOC, JPG up to 10MB</div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
          >
            <div className="relative z-10 flex items-center justify-center space-x-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          </button>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            By submitting, you agree to our Terms and Privacy Policy
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;