import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={4}>
      <Flex direction="column" align="center" justify="center" p={10}>
        <Heading mb={4}>Trading Journal</Heading>
        <Text fontSize="lg" mb={6}>
          Keep track of your stock and options trades with ease. Utilize GPT-4 to analyze and improve your trading strategies.
        </Text>
        <VStack spacing={4}>
          <Button as={Link} to="/add-trade" colorScheme="teal" size="lg" leftIcon={<FaPlus />}>
            Add New Trade
          </Button>
          <Button colorScheme="blue" size="lg">
            View Journal
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Index;