import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, List, ListItem, ListIcon, SimpleGrid, Flex } from '@chakra-ui/react';
import { Shield, Users, Lock, Settings, Check, ArrowRight } from 'lucide-react';

// Product data structure for easy addition of new products
const products = [
  {
    id: 'azure-devops-permission-manager',
    name: 'Azure DevOps Permission Manager',
    description: 'Simplify and secure your Azure DevOps permissions with our Policy-Based Access Control (PBAC) solution.',
    features: [
      {
        icon: Shield,
        title: 'Policy-Based Access Control',
        description: 'Implement fine-grained access control based on organizational policies and roles.'
      },
      {
        icon: Users,
        title: 'Team Management',
        description: 'Easily manage permissions for teams and individual contributors.'
      },
      {
        icon: Lock,
        title: 'Security Compliance',
        description: 'Ensure compliance with security standards and best practices.'
      },
      {
        icon: Settings,
        title: 'Automated Configuration',
        description: 'Automate permission setup and changes across projects.'
      }
    ],
    benefits: [
      'Reduce administrative overhead with automated permission management',
      'Minimize security risks with consistent access control policies',
      'Improve compliance with audit trails and policy enforcement',
      'Streamline onboarding and role assignments',
      'Scale your DevOps operations efficiently'
    ]
  },
  {
    id: 'cloud-deployment-helper',
    name: 'Cloud Deployment Helper',
    description: 'Automate and streamline your cloud deployments with our comprehensive toolset for Azure infrastructure.',
    features: [
      {
        icon: Settings,
        title: 'Infrastructure as Code',
        description: 'Deploy and manage Azure resources using Terraform and ARM templates with built-in best practices.'
      },
      {
        icon: Shield,
        title: 'Security First Approach',
        description: 'Ensure your deployments follow security best practices with automated compliance checks.'
      },
      {
        icon: Users,
        title: 'Team Collaboration',
        description: 'Enable multiple teams to collaborate on deployments with role-based controls and approvals.'
      },
      {
        icon: Lock,
        title: 'Environment Management',
        description: 'Easily manage multiple environments (dev, test, prod) with consistent configurations.'
      }
    ],
    benefits: [
      'Accelerate cloud adoption with predefined deployment templates',
      'Reduce configuration errors with automated validation',
      'Achieve consistent deployments across all environments',
      'Improve governance with built-in policy enforcement',
      'Cut deployment time by up to 70% with automation'
    ]
  }
  // Add more products here in the future
];

const Products: React.FC = () => {
  return (
    <Container maxW="7xl" py={16}>
      <VStack spacing={12} align="stretch">
        {/* Page Title */}
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" mb={4} color="brand.700">
            Our Products
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Discover our suite of cloud infrastructure solutions
          </Text>
        </Box>

        {/* Products Card Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {products.map((product) => (
            <Box 
              key={product.id}
              bg="white"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="lg"
              transition="transform 0.3s, box-shadow 0.3s"
              _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
              id={product.id}
            >
              {/* Product Card Header */}
              <Box bg="brand.700" p={6} color="white">
                <Heading as="h2" size="xl" mb={2}>
                  {product.name}
                </Heading>
                <Text fontSize="md" opacity={0.9}>
                  {product.description}
                </Text>
              </Box>
              
              {/* Product Key Features */}
              <Box p={6}>
                <Heading as="h3" size="md" mb={4} color="brand.600">
                  Key Features
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
                  {product.features.map((feature, index) => (
                    <FeatureCard
                      key={index}
                      icon={feature.icon}
                      title={feature.title}
                      description={feature.description}
                    />
                  ))}
                </SimpleGrid>
                
                {/* Product Benefits */}
                <Box bg="gray.50" p={4} borderRadius="md" mb={6}>
                  <Heading as="h3" size="md" mb={3} color="brand.600">
                    Benefits
                  </Heading>
                  <List spacing={2}>
                    {product.benefits.map((benefit, index) => (
                      <BenefitItem key={index} text={benefit} />
                    ))}
                  </List>
                </Box>
                
                {/* Card CTA */}
                <Flex justifyContent="center" mt={4}>
                  <Button
                    rightIcon={<ArrowRight size={16} />}
                    colorScheme="blue"
                    bg="brand.600"
                    _hover={{ bg: 'brand.700' }}
                    size="lg"
                    as="a"
                    href={`mailto:contact@aalcloud.com?subject=Inquiry about ${product.name}`}
                  >
                    Get Started
                  </Button>
                </Flex>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

interface FeatureProps {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <Box p={4} borderRadius="md" bg="white" boxShadow="sm" border="1px" borderColor="gray.100">
    <Flex align="center" mb={2}>
      <Box color="brand.600" mr={3}>
        <Icon size={20} />
      </Box>
      <Heading as="h4" size="sm">
        {title}
      </Heading>
    </Flex>
    <Text color="gray.600" fontSize="sm">
      {description}
    </Text>
  </Box>
);

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <ListItem display="flex" alignItems="center">
    <ListIcon as={Check} color="brand.500" />
    <Text fontSize="sm">{text}</Text>
  </ListItem>
);

export default Products; 