// components/Sections/ProductsShowcase.jsx (Temporary)
const ProductsShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="h-48 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Product {i}</h3>
              <p className="text-gray-600">Description here</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;