// components/Contact/ContactDetails.jsx
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Globe, Award } from 'lucide-react';

const ContactDetails = () => {
  const details = [
    {
      icon: Phone,
      title: "Phone Numbers",
      items: [
        { label: "Sales & Enquiries", value: "+91 98765 43210" },
        { label: "Technical Support", value: "+91 98765 43211" },
        { label: "Service", value: "+91 98765 43212" }
      ],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      items: [
        { label: "General Enquiries", value: "info@coattech.com" },
        { label: "Sales", value: "sales@coattech.com" },
        { label: "Support", value: "support@coattech.com" }
      ],
      color: "cyan"
    },
    {
      icon: MapPin,
      title: "Our Locations",
      items: [
        { label: "Head Office", value: "Industrial Area, Faridabad, Haryana" },
        { label: "Branch Office", value: "Peenya, Bangalore, Karnataka" },
        { label: "Factory", value: "Bhiwadi, Rajasthan" }
      ],
      color: "purple"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Emergency Support Only" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Cards */}
      {details.map((detail, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
        >
          <div className="flex items-center mb-4">
            <div className={`w-12 h-12 rounded-xl bg-${detail.color}-100 flex items-center justify-center mr-4`}>
              <detail.icon className={`text-${detail.color}-600`} size={24} />
            </div>
            <h3 className="text-lg font-bold">{detail.title}</h3>
          </div>
          <div className="space-y-3">
            {detail.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className="font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Office Hours */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white"
      >
        <div className="flex items-center mb-4">
          <Clock className="mr-3" size={24} />
          <h3 className="text-lg font-bold">Office Hours</h3>
        </div>
        <div className="space-y-3">
          {officeHours.map((hour, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
              <span>{hour.day}</span>
              <span className="font-medium">{hour.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-white/20">
          <div className="flex items-center text-sm">
            <Globe className="mr-2" size={16} />
            <span>Timezone: IST (GMT+5:30)</span>
          </div>
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6"
      >
        <div className="flex items-center mb-4">
          <Award className="text-amber-600 mr-3" size={24} />
          <h3 className="text-lg font-bold">Certifications</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {["ISO 9001:2015", "ISO 14001", "CE Certified", "MSME Registered"].map((cert, idx) => (
            <div key={idx} className="bg-amber-50 text-amber-700 px-3 py-2 rounded-lg text-center text-sm font-medium">
              {cert}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactDetails;