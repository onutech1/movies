import { HStack, Image, Text, Input, Kbd, IconButton } from "@chakra-ui/react";

import logo from "../assets/react.svg";

import { LuSearch, LuMoon, LuSun } from "react-icons/lu";

import { useColorMode } from "../components/ui/color-mode";
import { InputGroup } from "../components/ui/input-group";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justify="space-between"
      borderBottom="1px solid"
      borderColor="gray.200"
      bg="white"
      color="black"
      _dark={{
        borderColor: "gray.700",
        bg: "gray.900",
        color: "white",
      }}
      position="sticky"
      top="0"
      zIndex="1000"
      px={4}
      py={3}
    >
      {/* Logo */}
      <HStack gap={3}>
        <Image boxSize="35px" src={logo} alt="Logo" />

        <Text fontSize="lg" fontWeight="bold">
          Movie App
        </Text>
      </HStack>

      {/* Search */}
      <InputGroup
        maxW="400px"
        width="100%"
        startElement={<LuSearch />}
        endElement={<Kbd>⌘K</Kbd>}
      >
        <Input
          pl="40px"
          pr="60px"
          placeholder="Search movies..."
          borderRadius="full"
          bg="gray.100"
          color="black"
          _dark={{
            bg: "gray.800",
            color: "white",
            borderColor: "gray.600",
          }}
        />
      </InputGroup>

      {/* Theme Toggle */}
      <IconButton
        aria-label="Toggle Theme"
        onClick={toggleColorMode}
        borderRadius="full"
        variant="ghost"
        color="black"
        _dark={{
          color: "white",
        }}
      >
        {colorMode === "light" ? <LuMoon /> : <LuSun />}
      </IconButton>
    </HStack>
  );
};

export default Nav;
