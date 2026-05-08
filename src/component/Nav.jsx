import { HStack, Image, Text, Input, Kbd, IconButton } from "@chakra-ui/react";
import "react";
import logo from "../assets/react.svg";
import { LuSearch, LuMoon, LuSun } from "react-icons/lu";

// 👇 v3 Local Snippet Imports
import { useColorMode } from "../components/ui/color-mode";
import { InputGroup } from "../components/ui/input-group";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      justify="space-between"
      borderBottom="1px solid"
      borderColor="border"
      position="sticky"
      top="0"
      zIndex="1000"
      px={4} // Added some horizontal padding so it doesn't touch the screen edges
      py={3} // Added some vertical padding for standard height
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
          bg="bg.muted"
        />
      </InputGroup>

      {/* Theme Toggle - Fixed for v3 */}
      <IconButton
        aria-label="Toggle theme"
        onClick={toggleColorMode}
        borderRadius="full"
        variant="ghost"
      >
        {colorMode === "light" ? <LuMoon /> : <LuSun />}
      </IconButton>
    </HStack>
  );
};

export default Nav;
