import React from 'react';
import { Box, Container, Heading, Text, Button, VStack, HStack, List, ListItem, ListIcon } from '@chakra-ui/react';
import { Shield, Users, Lock, Settings, Check } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <Container maxW="7xl" py={16}>
      <VStack spacing={8} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" mb={8}>
          <Heading as="h1" size="2xl" mb={4} color="brand.700">
            Azure DevOps Permission Manager
          </Heading>
          <Text fontSize="xl" color="gray.600" maxW="2xl" mx="auto">
            Simplify and secure your Azure DevOps permissions with our Policy-Based Access Control (PBAC) solution.
          </Text>
        </Box>

        {/* Main Features */}
        <Box bg="white" p={8} rounded="xl" shadow="lg" mb={8}>
          <VStack spacing={6} align="stretch">
            <Heading as="h2" size="lg" color="brand.600" mb={4}>
              Key Features
            </Heading>
            <HStack spacing={8} align="start" flexWrap="wrap">
              <Feature
                icon={Shield}
                title="Policy-Based Access Control"
                description="Implement fine-grained access control based on organizational policies and roles."
              />
              <Feature
                icon={Users}
                title="Team Management"
                description="Easily manage permissions for teams and individual contributors."
              />
              <Feature
                icon={Lock}
                title="Security Compliance"
                description="Ensure compliance with security standards and best practices."
              />
              <Feature
                icon={Settings}
                title="Automated Configuration"
                description="Automate permission setup and changes across projects."
              />
            </HStack>
          </VStack>
        </Box>

        {/* Benefits Section */}
        <Box bg="gray.50" p={8} rounded="xl">
          <Heading as="h2" size="lg" color="brand.600" mb={6}>
            Benefits
          </Heading>
          <List spacing={4}>
            <BenefitItem text="Reduce administrative overhead with automated permission management" />
            <BenefitItem text="Minimize security risks with consistent access control policies" />
            <BenefitItem text="Improve compliance with audit trails and policy enforcement" />
            <BenefitItem text="Streamline onboarding and role assignments" />
            <BenefitItem text="Scale your DevOps operations efficiently" />
          </List>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" py={8}>
          <Button
            size="lg"
            colorScheme="blue"
            bg="brand.600"
            _hover={{ bg: 'brand.700' }}
            px={8}
          >
            Get Started
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

interface FeatureProps {
  icon: React.FC<any>;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, title, description }) => (
  <Box flex="1" minW="250px" mb={6}>
    <Icon size={24} className="text-brand-600 mb-4" />
    <Heading as="h3" size="md" mb={2}>
      {title}
    </Heading>
    <Text color="gray.600">{description}</Text>
  </Box>
);

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <ListItem display="flex" alignItems="center">
    <ListIcon as={Check} color="brand.500" />
    <Text>{text}</Text>
  </ListItem>
);

export default Products; 