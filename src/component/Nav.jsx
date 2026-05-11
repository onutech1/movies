import { HStack, Image, Input, Kbd, IconButton, Box } from "@chakra-ui/react";

import logo from "../assets/react.svg";

import { LuSearch, LuMoon, LuSun } from "react-icons/lu";

import { useColorMode } from "../components/ui/color-mode";
import { InputGroup } from "../components/ui/input-group";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justify="space-between"
      gap={4}
      borderBottom="1px solid"
      borderColor={{ base: "gray.200", _dark: "gray.700" }}
      bg={{ base: "white", _dark: "gray.900" }}
      color={{ base: "black", _dark: "white" }}
      position="sticky"
      top="0"
      zIndex="1000"
      px={{ base: 3, md: 6 }}
      py={3}
      backdropFilter="blur(10px)"
    >
      {/* LOGO */}
      <Box flexShrink={0}>
        <Image boxSize={{ base: "32px", md: "38px" }} src={logo} alt="Logo" />
      </Box>

      {/* SEARCH */}
      <InputGroup
        flex="1"
        maxW={{ base: "100%", md: "500px" }}
        startElement={<LuSearch />}
        endElement={<Kbd display={{ base: "none", md: "flex" }}>⌘K</Kbd>}
      >
        <Input
          pl="40px"
          pr="60px"
          placeholder="Search games..."
          borderRadius="full"
          bg={{ base: "gray.100", _dark: "gray.800" }}
          color={{ base: "black", _dark: "white" }}
          border="1px solid"
          borderColor={{
            base: "gray.200",
            _dark: "gray.700",
          }}
          _focus={{
            borderColor: "blue.400",
            boxShadow: "0 0 0 1px #3182ce",
          }}
        />
      </InputGroup>

      {/* THEME TOGGLE */}
      <IconButton
        aria-label="Toggle Theme"
        onClick={toggleColorMode}
        borderRadius="full"
        variant="ghost"
        size={{ base: "sm", md: "md" }}
      >
        {colorMode === "light" ? <LuMoon /> : <LuSun />}
      </IconButton>
    </HStack>
  );
};

export default Nav;
