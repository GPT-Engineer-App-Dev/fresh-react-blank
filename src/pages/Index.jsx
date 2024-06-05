import { Box, Container, Flex, Text, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">My Website</Text>
          <Flex>
            <Link as={RouterLink} to="/" px={2} color="white">Home</Link>
            <Link as={RouterLink} to="/about" px={2} color="white">About</Link>
            <Link as={RouterLink} to="/contact" px={2} color="white">Contact</Link>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container centerContent maxW="container.md" flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to My Website</Text>
          <Text>This is the main content area. Start building your awesome app here!</Text>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="gray.700" color="white" py={4}>
        <Container maxW="container.md" display="flex" justifyContent="center">
          <Text>&copy; {new Date().getFullYear()} My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;