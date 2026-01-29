// components/Products/ProductCategories.jsx
import { motion } from 'framer-motion';
import { 
  SprayCan, 
  Flame, 
  Droplets, 
  BriefcaseConveyorBelt , 
  Factory, 
  Zap, 
  Wind, 
  Droplet,
  Cpu,
  GlassWater 
} from 'lucide-react';

const ProductCategories = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    {
      id: 'all',
      name: 'All Products',
      icon: Factory,
      count: 12,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'booth',
      name: 'Coating Booth',
      icon: SprayCan,
      count: 4,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'oven',
      name: 'Curing Oven',
      icon: Flame,
      count: 3,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'pretreatment',
      name: 'Pre-Treatment',
      icon: Droplets,
      count: 3,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'conveyor',
      name: 'Conveyor Systems',
      icon: BriefcaseConveyorBelt,
      count: 2,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ced',
      name: 'CED Coating',
      icon: Cpu,
      count: 2,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'liquid',
      name: 'Liquid Painting',
      icon: Droplet,
      count: 2,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'drying',
      name: 'Drying Oven',
      icon: Wind,
      count: 2,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'etp',
      name: 'ETP/RO Plant',
      icon: GlassWater ,
      count: 2,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      id: 'electric',
      name: 'Electric Ovens',
      icon: Zap,
      count: 2,
      color: 'from-yellow-500 to-amber-500'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-600">Select a category to filter products</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`relative p-4 rounded-2xl transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r shadow-xl scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 hover:shadow-lg'
              } ${selectedCategory === category.id ? category.color : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl ${
                selectedCategory === category.id 
                  ? 'bg-white/20 backdrop-blur-sm' 
                  : 'bg-white'
              } flex items-center justify-center mb-3 mx-auto`}>
                <category.icon 
                  size={24} 
                  className={
                    selectedCategory === category.id 
                      ? 'text-white' 
                      : `text-gray-700`
                  } 
                />
              </div>
              
              <div className={`font-medium mb-1 ${
                selectedCategory === category.id ? 'text-white' : 'text-gray-800'
              }`}>
                {category.name}
              </div>
              
              <div className={`text-sm ${
                selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
              }`}>
                {category.count} products
              </div>
              
              {selectedCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
        
        {/* Active filter display */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full">
            <span className="text-sm">
              Showing: <span className="font-semibold">
                {categories.find(c => c.id === selectedCategory)?.name || 'All Products'}
              </span>
            </span>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs bg-white px-2 py-1 rounded-full hover:bg-blue-100"
              >
                Clear filter
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;