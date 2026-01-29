// components/Contact/LocationMap.jsx
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Train, Plane } from 'lucide-react';
import { useState } from 'react';

const LocationMap = () => {
  const [activeLocation, setActiveLocation] = useState('head-office');

  const locations = [
    {
      id: 'head-office',
      name: 'Head Office & Factory',
      address: 'Plot No. 123, Industrial Area, Phase 2, Faridabad, Haryana - 121003',
      coordinates: { lat: 28.4089, lng: 77.3178 },
      contact: '+91 98765 43210',
      departments: ['Administration', 'Sales', 'Manufacturing', 'R&D'],
      travelTime: {
        car: '45 mins from Delhi',
        train: '30 mins from Nizamuddin',
        plane: '1 hour from IGI Airport'
      }
    },
    {
      id: 'branch-office',
      name: 'Branch Office',
      address: 'Unit No. 45, Peenya Industrial Area, Bangalore, Karnataka - 560058',
      coordinates: { lat: 13.0330, lng: 77.5103 },
      contact: '+91 98765 43211',
      departments: ['Sales', 'Service', 'Support'],
      travelTime: {
        car: '20 mins from City Center',
        train: '15 mins from Bangalore Station',
        plane: '45 mins from Airport'
      }
    }
  ];

  const currentLocation = locations.find(loc => loc.id === activeLocation) || locations[0];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Our Locations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our strategically located offices across India
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Location Selector */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Our Offices</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <motion.button
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActiveLocation(location.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all ${
                    activeLocation === location.id
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-xl'
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="flex items-center mb-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                      activeLocation === location.id ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <MapPin className={activeLocation === location.id ? 'text-white' : 'text-blue-600'} size={20} />
                    </div>
                    <div>
                      <div className="font-bold">{location.name}</div>
                      <div className={`text-sm ${
                        activeLocation === location.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {location.address.split(',')[0]}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">{location.contact}</div>
                </motion.button>
              ))}
            </div>

            {/* Travel Information */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h4 className="font-bold mb-4 flex items-center">
                <Navigation className="mr-2" size={20} />
                Travel Information
              </h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Car className="text-blue-600 mr-3" size={18} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">By Car</div>
                    <div className="text-sm text-gray-600">{currentLocation.travelTime.car}</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Train className="text-green-600 mr-3" size={18} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">By Train</div>
                    <div className="text-sm text-gray-600">{currentLocation.travelTime.train}</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Plane className="text-purple-600 mr-3" size={18} />
                  <div className="flex-1">
                    <div className="text-sm font-medium">By Air</div>
                    <div className="text-sm text-gray-600">{currentLocation.travelTime.plane}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
              {/* Map Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">{currentLocation.name}</h3>
                    <p className="text-gray-600">{currentLocation.address}</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Map Visualization */}
              <div className="relative h-[400px] bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                {/* Simulated Map */}
                <div className="absolute inset-0">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px),
                                       linear-gradient(to bottom, #888 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}></div>
                  </div>

                  {/* Roads */}
                  <div className="absolute top-1/2 left-1/4 right-1/4 h-2 bg-gray-400/30 rounded-full"></div>
                  <div className="absolute left-1/2 top-1/4 bottom-1/4 w-2 bg-gray-400/30 rounded-full"></div>

                  {/* Location Marker */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        HQ
                      </div>
                      
                      {/* Pulsating Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-red-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Nearby Landmarks */}
                  {['Hotel', 'Station', 'Airport', 'Market'].map((landmark, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="absolute w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center"
                      style={{
                        top: `${30 + Math.random() * 40}%`,
                        left: `${20 + Math.random() * 60}%`
                      }}
                    >
                      <span className="text-xs font-bold text-gray-700">{landmark.charAt(0)}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Map Controls */}
                <div className="absolute bottom-6 right-6 flex space-x-2">
                  <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
                    <span className="text-lg">+</span>
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
                    <span className="text-lg">-</span>
                  </button>
                  <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100">
                    <Navigation size={20} />
                  </button>
                </div>

                {/* Location Info Overlay */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-6 left-6 max-w-xs"
                >
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <h4 className="font-bold mb-2">Departments at this location</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentLocation.departments.map((dept, idx) => (
                        <span key={idx} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                          {dept}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;