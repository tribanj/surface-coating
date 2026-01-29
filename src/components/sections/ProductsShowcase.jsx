// components/Sections/ProductsShowcase.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';

import { 
  Check, 
  Zap, 
  Shield, 
  Thermometer, 
  Droplets,
  Wind,
  Factory,
  Clock,
  TrendingUp,
  Download,
  Eye,
  ShoppingCart,
  Sparkles,
  Star,
  ArrowRight,
  Target,
  Battery
} from 'lucide-react';

const ProductsShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Auto Recovery Powder Booth",
      category: "Powder Coating Booth",
      description: "Fully automated powder recovery system with 99.8% efficiency and PLC control",
      price: "₹8,50,000",
      features: [
        "99.8% Powder Recovery",
        "PLC Control Panel",
        "Energy Efficient Design",
        "Low Maintenance",
        "Auto Cleaning System",
        "Explosion Proof"
      ],
      specs: {
        capacity: "500-2000 kg/hr",
        power: "15-30 HP",
        dimensions: "Custom",
        warranty: "5 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "BEST SELLER",
      badgeColor: "bg-red-500",
      rating: 4.8,
      delivery: "45-60 days"
    },
    {
      id: 2,
      name: "Gas Fired Curing Oven",
      category: "Curing Oven",
      description: "High efficiency gas-fired oven with precise temperature control (±2°C accuracy)",
      price: "₹12,00,000",
      features: [
        "Gas/Diesel/Electric Options",
        "±2°C Temperature Accuracy",
        "Quick Heat-up (20 mins)",
        "Low Fuel Consumption",
        "Uniform Heat Distribution",
        "Safety Interlocks"
      ],
      specs: {
        temperature: "Up to 300°C",
        fuel: "LPG/CNG/Diesel",
        heating: "20-30 mins",
        warranty: "3 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "POPULAR",
      badgeColor: "bg-blue-500",
      rating: 4.7,
      delivery: "60 days"
    },
    {
      id: 3,
      name: "7-Stage Pre-Treatment Plant",
      category: "Pre-Treatment",
      description: "Complete chemical treatment system for superior surface preparation",
      price: "₹15,00,000",
      features: [
        "7-Stage Process",
        "Auto Chemical Dosing",
        "Multi-metal Capable",
        "Corrosion Protection",
        "Water Recycling",
        "PLC Controlled"
      ],
      specs: {
        stages: "7 Stages",
        capacity: "Custom",
        automation: "Fully Auto",
        warranty: "4 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "ADVANCED",
      badgeColor: "bg-purple-500",
      rating: 4.9,
      delivery: "75 days"
    },
    {
      id: 4,
      name: "Overhead Power & Free Conveyor",
      category: "Conveyor Systems",
      description: "Heavy-duty conveyor system for seamless material handling",
      price: "₹25,00,000",
      features: [
        "Power & Free System",
        "Variable Speed Control",
        "5000kg Load Capacity",
        "Low Maintenance",
        "Safety Guards",
        "Auto Lubrication"
      ],
      specs: {
        capacity: "100-5000 kg",
        speed: "0-10 m/min",
        length: "Custom",
        warranty: "5 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "HEAVY DUTY",
      badgeColor: "bg-orange-500",
      rating: 4.6,
      delivery: "90 days"
    },
    {
      id: 5,
      name: "CED Coating Plant",
      category: "E-Coating",
      description: "Advanced electro-deposition coating for uniform coverage",
      price: "₹35,00,000",
      features: [
        "Uniform Coverage",
        "Corrosion Resistant",
        "Energy Efficient",
        "Auto Control",
        "Waste Treatment",
        "High Transfer Efficiency"
      ],
      specs: {
        voltage: "100-300V DC",
        capacity: "Custom",
        efficiency: "95%",
        warranty: "5 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "PREMIUM",
      badgeColor: "bg-green-500",
      rating: 4.8,
      delivery: "120 days"
    },
    {
      id: 6,
      name: "Industrial Water Drying Oven",
      category: "Drying Systems",
      description: "High-capacity drying oven for paint and coating applications",
      price: "₹9,50,000",
      features: [
        "Hot Air Circulation",
        "Digital Controls",
        "Energy Recovery",
        "Uniform Drying",
        "Stainless Steel",
        "Quick Drying"
      ],
      specs: {
        temperature: "Up to 200°C",
        capacity: "Custom",
        heating: "Electric/Gas",
        warranty: "3 Years"
      },
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800",
      badge: "EFFICIENT",
      badgeColor: "bg-cyan-500",
      rating: 4.5,
      delivery: "45 days"
    }
  ];

  const categories = [
    { name: "All Products", count: products.length, icon: Factory },
    { name: "Powder Booth", count: 2, icon: Sparkles },
    { name: "Curing Oven", count: 1, icon: Thermometer },
    { name: "Pre-Treatment", count: 1, icon: Droplets },
    { name: "Conveyor", count: 1, icon: TrendingUp },
    { name: "E-Coating", count: 1, icon: Battery }
  ];

  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const filteredProducts = selectedCategory === "All Products" 
    ? products 
    : products.filter(product => product.category.includes(selectedCategory));

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Premium Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="block text-gray-900">Our Advanced</span>
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Coating Systems
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of powder coating equipment, engineered for precision, efficiency, and durability.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-full transition-all ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <category.icon size={18} />
              <span className="font-medium">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                selectedCategory === category.name
                  ? 'bg-white/20'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Badge */}
              {product.badge && (
                <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg`}>
                  {product.badge}
                </div>
              )}

              {/* Rating */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center z-10">
                <Star size={14} className="text-yellow-500 fill-yellow-500 mr-1" />
                <span className="text-sm font-bold">{product.rating}</span>
              </div>

              {/* Product Image */}
              <div className="relative h-56 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${product.image})`,
                    backgroundSize: 'cover'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                
                {/* Category Tag */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-medium text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Quick Actions on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-3">
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center">
                      <Eye size={16} className="mr-2" />
                      Quick View
                    </button>
                    <button className="border border-white text-white px-4 py-2 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center">
                      <ShoppingCart size={16} className="mr-2" />
                      Enquire
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-500 mb-2 flex items-center">
                    <Zap size={14} className="mr-2 text-blue-500" />
                    Key Features
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <Check size={14} className="text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-xs text-gray-700 truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={idx} className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-xs text-gray-500 capitalize mb-1">{key}</div>
                      <div className="font-bold text-blue-600">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Price & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{product.price}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={12} className="mr-1" />
                      Delivery: {product.delivery}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                      <Download size={18} />
                    </button>
                    <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center">
                      Get Quote
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Compare Checkbox */}
              <div className="absolute bottom-4 right-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="text-xs text-gray-600">Compare</span>
                </label>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Message */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={40} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
            <button 
              onClick={() => setSelectedCategory("All Products")}
              className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-lg font-medium"
            >
              View All Products
            </button>
          </motion.div>
        )}

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Installations", icon: Factory },
              { value: "99.8%", label: "Recovery Efficiency", icon: TrendingUp },
              { value: "5 Years", label: "Warranty", icon: Shield },
              { value: "24/7", label: "Support", icon: Clock }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={28} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-lg mb-6">
              Looking for a custom solution? Our engineers can design a system tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Request Custom Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Schedule Factory Visit
              </button>
            </div>
          </div>
        </motion.div>

        {/* Product Comparison */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Product Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left">Feature</th>
                  {filteredProducts.slice(0, 3).map((product) => (
                    <th key={product.id} className="p-4 text-center">
                      <div className="font-bold">{product.name}</div>
                      <div className="text-sm text-gray-500">{product.price}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["Warranty", "Delivery", "Power Consumption", "Automation"].map((feature, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="p-4 font-medium">{feature}</td>
                    {filteredProducts.slice(0, 3).map((product) => (
                      <td key={product.id} className="p-4 text-center">
                        {feature === "Warranty" && product.specs.warranty}
                        {feature === "Delivery" && product.delivery}
                        {feature === "Power Consumption" && product.specs.power}
                        {feature === "Automation" && "PLC Controlled"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;