import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaUserPlus, FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex align="center" justify={{ base: "center", md: "space-around", xl: "space-between" }} direction={{ base: "column-reverse", md: "row" }} wrap="no-wrap" minH="70vh" px={8} mb={16}>
        <Stack spacing={4} w={{ base: "80%", md: "40%" }} align={["center", "center", "flex-start", "flex-start"]}>
          <Heading as="h1" size="xl" fontWeight="bold" color={useColorModeValue("gray.700", "white")} textAlign={["center", "center", "left", "left"]}>
            Join the excitement of online sports betting
          </Heading>
          <Heading as="h2" size="md" color={useColorModeValue("gray.800", "gray.200")} opacity="0.8" fontWeight="normal" lineHeight={1.5} textAlign={["center", "center", "left", "left"]}>
            Register now and get an exclusive deposit bonus!
          </Heading>
          <Stack direction={{ base: "column", sm: "row" }} align="center" justify={["center", "space-around", "flex-start", "flex-start"]} spacing={2} mt={4}>
            <Button size="lg" colorScheme="teal" rightIcon={<FaUserPlus />}>
              Sign Up Now
            </Button>
            <Button size="lg" variant="outline" colorScheme="teal" rightIcon={<FaArrowRight />}>
              Learn More
            </Button>
          </Stack>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          <Image src="https://images.unsplash.com/photo-1499877468582-90301c136ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBiZXR0aW5nfGVufDB8fHx8MTcwOTQ2NjEzOXww&ixlib=rb-4.0.3&q=80&w=1080" size="100%" rounded="1rem" shadow="2xl" />
        </Box>
      </Flex>

      {/* Promotions Section */}
      <Flex align="center" justify="center" direction="column" wrap="no-wrap" minH="50vh" px={8} mb={16}>
        <Heading as="h3" size="lg" color={useColorModeValue("gray.700", "white")} textAlign="center" mb={4}>
          Latest Promotions
        </Heading>
        <Stack spacing={4} w="100%" direction={{ base: "column", md: "row" }} justify="center" align="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" bg={useColorModeValue("white", "gray.800")} p={4}>
            <Image src="https://images.unsplash.com/photo-1533745848184-3db07256e163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWxjb21lJTIwYm9udXN8ZW58MHx8fHwxNzA5NDY2MTM5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Welcome Bonus" borderRadius="lg" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Welcome Bonus
            </Text>
            <Text mt={2}>Get a 100% bonus on your first deposit!</Text>
            <Button mt={4} colorScheme="teal">
              Claim now
            </Button>
          </Box>

          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md" bg={useColorModeValue("white", "gray.800")} p={4}>
            <Image src="https://images.unsplash.com/photo-1472415825778-0e0a7f363a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXNoYmFjayUyMG9mZmVyfGVufDB8fHx8MTcwOTQ2NjEzOXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Cashback Offer" borderRadius="lg" />
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
              Cashback Offer
            </Text>
            <Text mt={2}>Enjoy weekly cashback on your bets!</Text>
            <Button mt={4} colorScheme="teal">
              Claim now
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Index;
