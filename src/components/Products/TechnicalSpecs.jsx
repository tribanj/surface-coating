// components/Products/TechnicalSpecs.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Printer, Share2, Maximize2, FileText } from 'lucide-react';

const TechnicalSpecs = () => {
  const [activeSpec, setActiveSpec] = useState('powder-booth');

  const specifications = {
    'powder-booth': {
      name: 'Powder Coating Booth',
      specs: [
        { parameter: 'Powder Recovery Efficiency', value: '99.8%', unit: '', grade: 'Excellent' },
        { parameter: 'Air Velocity', value: '0.4 - 0.6', unit: 'm/s', grade: 'Optimal' },
        { parameter: 'Filter Surface Area', value: '120', unit: 'm²', grade: 'High' },
        { parameter: 'Power Consumption', value: '15-30', unit: 'HP', grade: 'Low' },
        { parameter: 'Noise Level', value: '≤75', unit: 'dB', grade: 'Low' },
        { parameter: 'Operating Pressure', value: '0.5 - 0.7', unit: 'Bar', grade: 'Standard' }
      ],
      materials: [
        'SS 304/316 Filter Cartridges',
        'MS Powdered Coated Body',
        'Food Grade Rubber Curtains',
        'Explosion Proof Lighting'
      ]
    },
    'curing-oven': {
      name: 'Curing Oven',
      specs: [
        { parameter: 'Temperature Range', value: 'RT - 250', unit: '°C', grade: 'Wide' },
        { parameter: 'Temperature Uniformity', value: '±2', unit: '°C', grade: 'Excellent' },
        { parameter: 'Heat-up Time', value: '20-30', unit: 'minutes', grade: 'Fast' },
        { parameter: 'Insulation Thickness', value: '150', unit: 'mm', grade: 'Thick' },
        { parameter: 'Fuel Consumption', value: '8-12', unit: 'kg/hr', grade: 'Low' },
        { parameter: 'Control Accuracy', value: '±1', unit: '°C', grade: 'Precise' }
      ],
      materials: [
        'Galvanized Steel Casing',
        'Rockwool Insulation',
        'SS 304 Heating Coils',
        'Ceramic Heating Elements'
      ]
    },
    'pretreatment': {
      name: 'Pre-Treatment Plant',
      specs: [
        { parameter: 'Number of Stages', value: '5-7', unit: 'Stages', grade: 'Complete' },
        { parameter: 'Process Time', value: '15-30', unit: 'minutes', grade: 'Optimal' },
        { parameter: 'Water Consumption', value: '500-2000', unit: 'L/hr', grade: 'Low' },
        { parameter: 'Chemical Dosing', value: 'Auto', unit: '', grade: 'Automatic' },
        { parameter: 'Temperature Control', value: '±3', unit: '°C', grade: 'Precise' },
        { parameter: 'pH Control', value: 'Auto', unit: '', grade: 'Automatic' }
      ],
      materials: [
        'PP/SS Construction',
        'Chemical Resistant Pumps',
        'SS 316 Heat Exchangers',
        'FRP Tanks'
      ]
    }
  };

  const currentSpec = specifications[activeSpec];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Specifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed specifications for our premium equipment
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Specification Tabs */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <h3 className="font-bold mb-4">Select Equipment</h3>
              <div className="space-y-2">
                {Object.keys(specifications).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveSpec(key)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeSpec === key
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium">{specifications[key].name}</div>
                    <div className="text-sm text-gray-500">
                      {specifications[key].specs.length} parameters
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6 text-white">
              <h3 className="font-bold mb-4">Download Resources</h3>
              <div className="space-y-3">
                {[
                  { icon: FileText, text: 'Technical Datasheet', size: '2.4 MB' },
                  { icon: FileText, text: 'Installation Manual', size: '5.1 MB' },
                  { icon: FileText, text: 'Maintenance Guide', size: '3.2 MB' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <div className="flex items-center">
                      <item.icon size={18} className="mr-3" />
                      <span>{item.text}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm opacity-80">{item.size}</span>
                      <Download size={16} className="cursor-pointer hover:opacity-80" />
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 bg-white text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors flex items-center justify-center">
                <Printer size={18} className="mr-2" />
                Print All Specifications
              </button>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold">{currentSpec.name} Specifications</h3>
                  <div className="flex space-x-2">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <Share2 size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                      <Maximize2 size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-700">Parameter</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Value</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Unit</th>
                      <th className="text-left p-4 font-semibold text-gray-700">Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentSpec.specs.map((spec, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4">{spec.parameter}</td>
                        <td className="p-4 font-semibold">{spec.value}</td>
                        <td className="p-4 text-gray-500">{spec.unit}</td>
                        <td className="p-4">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            spec.grade === 'Excellent' ? 'bg-green-100 text-green-800' :
                            spec.grade === 'Optimal' ? 'bg-blue-100 text-blue-800' :
                            spec.grade === 'High' ? 'bg-purple-100 text-purple-800' :
                            'bg-amber-100 text-amber-800'
                          }`}>
                            {spec.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Materials Used */}
              <div className="p-6 border-t border-gray-100">
                <h4 className="font-bold mb-4">Materials Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentSpec.materials.map((material, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-6">Performance Metrics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Efficiency', value: '98%', color: 'from-green-400 to-emerald-500' },
                  { label: 'Durability', value: '15+', color: 'from-blue-400 to-cyan-500' },
                  { label: 'Energy Saving', value: '40%', color: 'from-amber-400 to-orange-500' },
                  { label: 'Uptime', value: '99.5%', color: 'from-purple-400 to-pink-500' }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`h-32 w-32 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                      <div className="text-3xl font-bold">{metric.value}</div>
                    </div>
                    <div className="font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;