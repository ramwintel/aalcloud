import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, IndianRupee, Timer } from 'lucide-react';

const jobOpening = {
  title: 'DevOps Engineer',
  location: 'Chennai',
  type: 'Part-time (12 hours/week)',
  salary: '₹50,000/month (Negotiable)',
  workLocation: 'Home Office',
  description: 'We are seeking a highly skilled DevOps Engineer with expertise in Azure Cloud, Azure kubernetes services (AKS), Terraform Infrastructure as Code (IaC), very COMPLEX CI/CD pipeline automation using Azure DevOps, and strong scripting capabilities in PowerShell and Bash. The ideal candidate will have a deep understanding of cloud-native architecture, automation, and modern DevOps practices to drive secure, scalable, and highly available infrastructure solutions.',
  responsibilities: [
    'Design, implement, and maintain scalable infrastructure using Terraform on Microsoft Azure',
    'Develop and manage end-to-end CI/CD pipelines using Azure DevOps (ADO) for build, release, and deployment automation',
    'Implement infrastructure provisioning, configuration management, and state handling with Terraform and Azure DevOps Repos',
    'Write reusable, secure, and efficient scripts in PowerShell and Bash for automation and operational tasks'
  ],
  requirements: [
    'Proven hands-on experience with Azure services (AKS, App Services, VNets, NSGs, Azure Firewall, Storage, Cosmos DB, etc.)',
    'Expertise in Terraform (HCL), including modules, workspaces, remote state, and backends',
    'Strong working knowledge of Azure DevOps Pipelines, Repos, and Service Connections',
    'Proficiency in PowerShell and Bash scripting',
    'Good understanding of Git workflows, branching strategies, and code versioning',
    'Experience with Azure RBAC, service principals, and identity-based access management',
    'Familiarity with monitoring/logging using Azure Monitor, Log Analytics, and Application Insights'
  ],
  additionalInfo: [
    'Initial training and weekly requirements will be provided',
    'Flexible timing (weekdays or weekends)',
    'Work to be completed at home office location',
    'Cash payment on monthly basis'
  ]
};

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* Job Opening Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{jobOpening.title}</h2>
              
              <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
                <span className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {jobOpening.location}
                </span>
                <span className="flex items-center">
                  <Timer className="w-5 h-5 mr-2" />
                  {jobOpening.type}
                </span>
                <span className="flex items-center">
                  <IndianRupee className="w-5 h-5 mr-2" />
                  {jobOpening.salary}
                </span>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8">{jobOpening.description}</p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Responsibilities:</h3>
                <ul className="space-y-3 mb-8">
                  {jobOpening.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <Briefcase className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Required Skills:</h3>
                <ul className="space-y-3 mb-8">
                  {jobOpening.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <Briefcase className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Information:</h3>
                <ul className="space-y-3 mb-8">
                  {jobOpening.additionalInfo.map((info, index) => (
                    <li key={index} className="flex items-start">
                      <Briefcase className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-blue-600" />
                      <span className="text-gray-600">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
                <a href="mailto:contact@aalcloud.com" className="inline-block ml-4 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 