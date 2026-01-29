// components/Layout/Footer.jsx
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Projects', href: '/projects' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact', href: '/contact' }
  ];
  
  const products = [
    { name: 'Powder Coating Booth', href: '/products/booth' },
    { name: 'Powder Coating Oven', href: '/products/oven' },
    { name: 'Pre-Treatment Plant', href: '/products/pretreatment' },
    { name: 'Conveyor Systems', href: '/products/conveyor' }
  ];
  
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CT</span>
              </div>
              <span className="text-2xl font-bold">CoatTech</span>
            </div>
            <p className="text-gray-400 mb-6">
              Leading manufacturer of advanced powder coating systems and industrial solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Products</h3>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <span className="text-gray-400">
                  Industrial Area, Phase 2<br />
                  Faridabad, Haryana 121003
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-blue-400" size={18} />
                <span className="text-gray-400">+91 9876543210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-blue-400" size={18} />
                <span className="text-gray-400">info@coattech.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CoatTech Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-white text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;