// components/Contact/SocialConnect.jsx
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const SocialConnect = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const socialPlatforms = [
    {
      icon: Facebook,
      name: 'Facebook',
      handle: '@CoatTech',
      followers: '15.2K',
      color: 'from-blue-600 to-blue-800',
      url: '#'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@CoatTech_Official',
      followers: '28.5K',
      color: 'from-pink-500 to-purple-600',
      url: '#'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'CoatTech Solutions',
      followers: '12.7K',
      color: 'from-blue-500 to-blue-700',
      url: '#'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@CoatTech',
      followers: '8.9K',
      color: 'from-sky-500 to-blue-500',
      url: '#'
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'CoatTech TV',
      followers: '5.3K',
      color: 'from-red-600 to-red-700',
      url: '#'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">Connect on Social Media</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="group relative block"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/20 transition-all">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mx-auto mb-3`}>
                      <platform.icon className="text-white" size={24} />
                    </div>
                    <div className="font-medium text-white">{platform.name}</div>
                    <div className="text-sm text-gray-300 mt-1">{platform.followers}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <div className="flex items-center mb-6">
              <Mail className="text-white mr-3" size={28} />
              <h2 className="text-2xl font-bold text-white">Stay Updated</h2>
            </div>
            
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates, industry insights, and exclusive offers.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Send className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              
              {subscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-500/20 border border-green-400/30 rounded-lg text-green-300 text-sm"
                >
                  ✅ Successfully subscribed! Check your email for confirmation.
                </motion.div>
              )}
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Subscribe to Newsletter</span>
              </button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-gray-300">Our team typically responds within 2 hours during business hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialConnect;