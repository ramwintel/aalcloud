import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: '50+',
    label: 'Clients Served',
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: '100%',
    label: 'Client Satisfaction',
  },
  {
    icon: <Clock className="w-8 h-8" />,
    value: '5+ Years',
    label: 'Experience',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    value: '20+',
    label: 'Countries',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About AalCloud</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Your trusted partner in cloud infrastructure and digital transformation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              AalCloud was founded with a vision to simplify cloud infrastructure for businesses
              of all sizes. Our team of expert consultants brings together years of experience
              in Azure cloud solutions and infrastructure automation with Terraform.
            </p>
            <p className="text-gray-600 mb-6">
              We believe in delivering not just services, but true partnerships that help our
              clients achieve their digital transformation goals. Our commitment to excellence
              and innovation has made us a trusted name in the industry.
            </p>
            <p className="text-gray-600">
              Today, we continue to grow and evolve, staying at the forefront of cloud
              technology while maintaining our core values of expertise, reliability, and
              customer satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project and solution we deliver
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and innovative solutions
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Partnership</h3>
              <p className="text-gray-600">
                We build lasting partnerships with our clients
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 