// pages/Products.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductsHero from '../components/Products/ProductsHero';
import ProductCategories from '../components/Products/ProductCategories';
import ProductShowcase from '../components/Products/ProductShowcase';
import SolutionsComparison from '../components/Products/SolutionsComparison';
import TechnicalSpecs from '../components/Products/TechnicalSpecs';
import ProductEnquiry from '../components/Products/ProductEnquiry';
import ProductsFAQ from '../components/Products/ProductsFAQ';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="pt-20 bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <ProductsHero />
      
      {/* Product Categories */}
      <ProductCategories 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      {/* Products Grid */}
      <ProductShowcase selectedCategory={selectedCategory} />
      
      {/* Solutions Comparison */}
      <SolutionsComparison />
      
      {/* Technical Specifications */}
      <TechnicalSpecs />
      
      {/* Enquiry Form */}
      <ProductEnquiry />
      
      {/* FAQ Section */}
      <ProductsFAQ />
    </div>
  );
};

export default Products;