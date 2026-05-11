import {
  Box,
  Heading,
  VStack,
  Text,
  Accordion,
  Icon,
  Flex,
} from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaGamepad,
  FaFire,
} from "react-icons/fa";

import { MdSportsEsports, MdOutlineSportsBasketball } from "react-icons/md";

const Sidebar = () => {
  const itemStyle = {
    align: "center",
    gap: 3,
    cursor: "pointer",
    w: "100%",
    p: 2,
    borderRadius: "md",
    transition: "0.2s",
    _hover: {
      bg: "gray.100",
      transform: "translateX(4px)",
    },
    _dark: {
      _hover: {
        bg: "gray.700",
      },
    },
  };

  return (
    <Box
      w={{ base: "100%", md: "240px" }}
      bg="white"
      color="black"
      borderRight="1px solid"
      borderColor="gray.200"
      px={5}
      py={6}
      overflowY="auto"
      _dark={{
        bg: "gray.900",
        color: "white",
        borderColor: "gray.700",
      }}
    >
      {/* LOGO */}
      <Heading size="lg" mb={8}>
        🎮 Games
      </Heading>

      <Accordion.Root multiple defaultValue={["platforms"]}>
        {/* Platforms */}
        <Accordion.Item value="platforms" border="none">
          <Accordion.ItemTrigger py={3}>
            <Flex justify="space-between" align="center" w="100%">
              <Text fontSize="md" fontWeight="bold">
                Platforms
              </Text>

              <Accordion.ItemIndicator />
            </Flex>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <VStack align="start" gap={2}>
                <Flex {...itemStyle}>
                  <Icon as={FaWindows} />
                  <Text>PC</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={FaPlaystation} />
                  <Text>PlayStation</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={FaXbox} />
                  <Text>Xbox</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={FaGamepad} />
                  <Text>Nintendo</Text>
                </Flex>
              </VStack>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        {/* Genres */}
        <Accordion.Item value="genres" border="none">
          <Accordion.ItemTrigger py={3}>
            <Flex justify="space-between" align="center" w="100%">
              <Text fontSize="md" fontWeight="bold">
                Genres
              </Text>

              <Accordion.ItemIndicator />
            </Flex>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <VStack align="start" gap={2}>
                <Flex {...itemStyle}>
                  <Icon as={FaFire} />
                  <Text>Action</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={MdSportsEsports} />
                  <Text>Adventure</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={MdOutlineSportsBasketball} />
                  <Text>Sports</Text>
                </Flex>

                <Flex {...itemStyle}>
                  <Icon as={FaGamepad} />
                  <Text>Racing</Text>
                </Flex>
              </VStack>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </Box>
  );
};

export default Sidebar;
