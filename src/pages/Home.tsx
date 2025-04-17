import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Server, Shield } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Infrastructure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Expert Azure and Terraform consulting to modernize your cloud infrastructure
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:contact@aalcloud.com" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Contact Us
              </a>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Get Started
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Cloud className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Expertise</h3>
              <p className="text-gray-600">
                Leverage our deep Azure knowledge for optimal cloud solutions
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Server className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Infrastructure as Code</h3>
              <p className="text-gray-600">
                Automate your infrastructure with Terraform best practices
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Security First</h3>
              <p className="text-gray-600">
                Implement robust security measures for your cloud infrastructure
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 