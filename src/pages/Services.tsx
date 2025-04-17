import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Code,
  Lock,
  BarChart,
  Database,
  Settings,
} from 'lucide-react';

const services = [
  {
    icon: <Cloud />,
    title: 'Azure Cloud Solutions',
    description: 'Expert guidance in Azure cloud architecture, migration, and optimization.',
  },
  {
    icon: <Code />,
    title: 'Infrastructure as Code',
    description: 'Terraform implementation and best practices for automated infrastructure.',
  },
  {
    icon: <Lock />,
    title: 'Security & Compliance',
    description: 'Implement robust security measures and maintain compliance standards.',
  },
  {
    icon: <BarChart />,
    title: 'Performance Optimization',
    description: 'Optimize your cloud infrastructure for maximum efficiency and cost savings.',
  },
  {
    icon: <Database />,
    title: 'Database Management',
    description: 'Expert management of cloud databases and data migration services.',
  },
  {
    icon: <Settings />,
    title: 'DevOps Integration',
    description: 'Streamline your development and operations with modern DevOps practices.',
  },
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive cloud infrastructure solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4 w-12 h-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 