// components/About/StatsCounter.jsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const StatsCounter = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const stats = [
    { value: 500, suffix: "+", label: "Happy Clients" },
    { value: 1000, suffix: "+", label: "Projects Completed" },
    { value: 15, suffix: "+", label: "Years Experience" },
    { value: 40, suffix: "+", label: "Countries Served" }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-cyan-500">
      <div ref={ref} className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.1
                  }
                },
                hidden: { opacity: 0, y: 20 }
              }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={controls}
                  variants={{
                    visible: {
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1 + 0.3
                      }
                    }
                  }}
                >
                  {stat.value}
                </motion.span>
                {stat.suffix}
              </div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;