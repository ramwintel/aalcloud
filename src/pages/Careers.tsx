import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ChevronRight } from 'lucide-react';

const jobListings = [
  {
    title: 'Senior Azure Cloud Architect',
    location: 'Remote',
    type: 'Full-time',
    description: 'Lead and design complex Azure cloud solutions for enterprise clients.',
    requirements: [
      'Extensive experience with Azure cloud services',
      'Strong background in cloud architecture',
      'Experience with Terraform and IaC',
      'Excellent communication skills',
    ],
  },
  {
    title: 'DevOps Engineer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Implement and maintain CI/CD pipelines and infrastructure automation.',
    requirements: [
      'Experience with Azure DevOps',
      'Strong Terraform knowledge',
      'Containerization expertise',
      'CI/CD pipeline experience',
    ],
  },
  {
    title: 'Cloud Security Specialist',
    location: 'Remote',
    type: 'Full-time',
    description: 'Ensure security best practices in cloud infrastructure implementations.',
    requirements: [
      'Cloud security certifications',
      'Experience with Azure security services',
      'Knowledge of compliance frameworks',
      'Security automation experience',
    ],
  },
];

const Careers: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Build the future of cloud infrastructure with us
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-gray-600">
              At AalCloud, we foster an environment of innovation, continuous learning,
              and collaboration. We believe in empowering our team members to grow
              both professionally and personally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
              <p className="text-gray-600">
                We encourage creative solutions and embrace new technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Work-Life Balance</h3>
              <p className="text-gray-600">
                Flexible working hours and remote-first environment
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                Continuous learning and career development support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Open Positions
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobListings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h3>
                    <div className="flex space-x-4 mt-2 text-gray-600">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center text-blue-600 hover:text-blue-700">
                    Apply Now
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="space-y-2">
                  {job.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center text-gray-600">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {req}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 