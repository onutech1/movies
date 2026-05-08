// components/Sidebar.jsx

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
  return (
    <Box
      w="250px"
      minH="100vh"
      bg="#121212"
      color="white"
      p={5}
      borderRight="1px solid #2a2a2a"
      position="sticky"
      top="0"
    >
      {/* LOGO */}
      <Heading size="lg" mb={10}>
        🎮 Games
      </Heading>

      <Accordion.Root multiple defaultValue={["platforms"]}>
        {/* PLATFORMS */}
        <Accordion.Item value="platforms" border="none">
          <Accordion.ItemTrigger py={3}>
            <Flex justify="space-between" align="center" w="100%">
              <Text fontSize="lg" fontWeight="bold">
                Platforms
              </Text>

              <Accordion.ItemIndicator />
            </Flex>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <VStack align="start" gap={4}>
                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={FaWindows} />
                  <Text>PC</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={FaPlaystation} />
                  <Text>PlayStation</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={FaXbox} />
                  <Text>Xbox</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={FaGamepad} />
                  <Text>Nintendo</Text>
                </Flex>
              </VStack>
            </Accordion.ItemBody>
          </Accordion.ItemContent>
        </Accordion.Item>

        {/* GENRES */}
        <Accordion.Item value="genres" border="none">
          <Accordion.ItemTrigger py={3}>
            <Flex justify="space-between" align="center" w="100%">
              <Text fontSize="lg" fontWeight="bold">
                Genres
              </Text>

              <Accordion.ItemIndicator />
            </Flex>
          </Accordion.ItemTrigger>

          <Accordion.ItemContent>
            <Accordion.ItemBody>
              <VStack align="start" gap={4}>
                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={FaFire} />
                  <Text>Action</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={MdSportsEsports} />
                  <Text>Adventure</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
                  <Icon as={MdOutlineSportsBasketball} />
                  <Text>Sports</Text>
                </Flex>

                <Flex align="center" gap={3} cursor="pointer">
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
