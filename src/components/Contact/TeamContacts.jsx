// components/Contact/TeamContacts.jsx
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, Video } from 'lucide-react';

const TeamContacts = () => {
  const teamMembers = [
    {
      name: "Rajesh Sharma",
      role: "Sales Director",
      department: "Sales & Marketing",
      phone: "+91 98765 43210",
      email: "rajesh@coattech.com",
      availability: "Available Now",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Priya Verma",
      role: "Technical Head",
      department: "Engineering",
      phone: "+91 98765 43211",
      email: "priya@coattech.com",
      availability: "In Office",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Amit Patel",
      role: "Service Manager",
      department: "After Sales",
      phone: "+91 98765 43212",
      email: "amit@coattech.com",
      availability: "Available",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Talk to Our Team</h2>
        <div className="text-sm text-gray-500">Direct contacts</div>
      </div>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                  <User className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <div className="text-blue-600 font-medium">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.department}</div>
                </div>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {member.availability}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <a 
                href={`tel:${member.phone}`}
                className="flex items-center justify-center p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">Call</span>
              </a>
              <a 
                href={`mailto:${member.email}`}
                className="flex items-center justify-center p-3 bg-cyan-50 text-cyan-600 rounded-lg hover:bg-cyan-100 transition-colors group"
              >
                <Mail size={18} className="mr-2" />
                <span className="font-medium">Email</span>
              </a>
            </div>

            <div className="flex space-x-3">
              <button className="flex-1 flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                <MessageSquare size={16} className="mr-2" />
                WhatsApp
              </button>
              <button className="flex-1 flex items-center justify-center p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
                <Video size={16} className="mr-2" />
                Video Call
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Connect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl text-center"
      >
        <h3 className="font-bold mb-2">Need Immediate Assistance?</h3>
        <p className="text-sm text-gray-600 mb-4">Connect with our 24/7 support team</p>
        <div className="flex space-x-3">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Live Chat
          </button>
          <button className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
            Emergency Call
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TeamContacts;