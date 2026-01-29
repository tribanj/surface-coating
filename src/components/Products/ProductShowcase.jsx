// components/Products/ProductShowcase.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ShoppingCart
} from 'lucide-react';

const ProductShowcase = ({ selectedCategory }) => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const allProducts = [
    // Powder Coating Booths
    {
      id: 1,
      category: 'booth',
      name: 'Auto Recovery Powder Booth',
      description: 'Fully automated powder recovery system with 99.8% efficiency',
      price: '₹8,50,000',
      features: ['Auto Powder Recovery', 'PLC Control', 'Energy Efficient', 'Low Maintenance'],
      specs: { capacity: '500-2000 kg/hr', recovery: '99.8%', power: '15-30 HP' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'BEST SELLER',
      badgeColor: 'bg-red-500'
    },
    {
      id: 2,
      category: 'booth',
      name: 'Manual Powder Booth',
      description: 'Economical solution for small to medium scale operations',
      price: '₹3,50,000',
      features: ['Manual Recovery', 'Easy Operation', 'Compact Design', 'Budget Friendly'],
      specs: { capacity: '100-500 kg/hr', recovery: '95%', power: '5-10 HP' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'ECONOMY',
      badgeColor: 'bg-green-500'
    },
    
    // Curing Ovens
    {
      id: 3,
      category: 'oven',
      name: 'Gas Fired Curing Oven',
      description: 'High efficiency gas-fired oven with precise temperature control',
      price: '₹12,00,000',
      features: ['Gas Fired', '±2°C Accuracy', 'Quick Heat-up', 'Low Fuel Consumption'],
      specs: { temp: 'Up to 250°C', heating: '20-30 mins', fuel: 'LPG/CNG' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'POPULAR',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 4,
      category: 'oven',
      name: 'Electric Infrared Oven',
      description: 'Rapid heating with infrared technology for uniform curing',
      price: '₹9,50,000',
      features: ['Infrared Heating', 'Uniform Heat', 'Fast Curing', 'Clean Operation'],
      specs: { temp: 'Up to 300°C', heating: '5-10 mins', power: 'Electric' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'ADVANCED',
      badgeColor: 'bg-purple-500'
    },
    
    // Pre-Treatment Plants
    {
      id: 5,
      category: 'pretreatment',
      name: '7-Stage Spray PT Plant',
      description: 'Complete surface preparation with chemical treatment stages',
      price: '₹15,00,000',
      features: ['7-Stage Process', 'Auto Dosing', 'Corrosion Protection', 'Multi-metal'],
      specs: { stages: '7 Stages', capacity: 'Custom', automation: 'Fully Auto' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'COMPLETE',
      badgeColor: 'bg-cyan-500'
    },
    
    // Conveyor Systems
    {
      id: 6,
      category: 'conveyor',
      name: 'Overhead Power & Free',
      description: 'Heavy duty conveyor system for seamless material handling',
      price: '₹25,00,000',
      features: ['Power & Free', 'Variable Speed', '5000kg Capacity', 'Low Maintenance'],
      specs: { capacity: '100-5000 kg', speed: '0-10 m/min', type: 'Overhead' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
      badge: 'HEAVY DUTY',
      badgeColor: 'bg-orange-500'
    },
    
    // Add more products for other categories...
  ];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  const ProductCard = ({ product }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
    >
      {/* Product Badge */}
      {product.badge && (
        <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold z-10`}>
          {product.badge}
        </div>
      )}
      
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white">
            <div className="flex items-center space-x-4">
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
      </div>
      
      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
        
        {/* Features */}
        <div className="mb-4">
          <div className="text-sm font-medium text-gray-500 mb-2">Key Features</div>
          <div className="flex flex-wrap gap-2">
            {product.features.slice(0, 2).map((feature, index) => (
              <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                +{product.features.length - 2} more
              </span>
            )}
          </div>
        </div>
        
        {/* Specifications */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {Object.entries(product.specs).map(([key, value], index) => (
            <div key={index} className="text-center p-2 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-500 capitalize">{key}</div>
              <div className="font-semibold text-sm">{value}</div>
            </div>
          ))}
        </div>
        
        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-2xl font-bold text-blue-600">{product.price}</div>
            <div className="text-xs text-gray-500">Starting Price</div>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
              <Download size={18} />
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Products</h2>
            <p className="text-gray-600">
              {filteredProducts.length} products found
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2">
              <option>Sort by: Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50">
              Compare Products
            </button>
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Factory size={40} className="text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Product Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "All products come with 5-year warranty"
              },
              {
                icon: Clock,
                title: "Quick Delivery",
                description: "45-60 days installation period"
              },
              {
                icon: TrendingUp,
                title: "After Sales Support",
                description: "24/7 technical support available"
              }
            ].map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <highlight.icon size={28} />
                </div>
                <h4 className="text-lg font-bold mb-2">{highlight.title}</h4>
                <p className="text-blue-100">{highlight.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;