import { useEffect, useState } from "react";
import {
  SimpleGrid,
  Card,
  Image,
  Heading,
  Flex,
  Badge,
  Spinner,
  Center,
  Box,
  Icon,
  Text,
} from "@chakra-ui/react";

import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
} from "react-icons/fa";

import apiClient from "../Servies/ApiClient";

const Cardgrid = () => {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // FETCH GAMES
  const fetchGames = async () => {
    try {
      setLoading(true);

      const res = await apiClient.get(`/games?page=${page}`);

      setGames((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // INFINITE SCROLL
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 150;

      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // METASCORE COLORS
  const getScoreColor = (score) => {
    if (score >= 85) return "green.400";
    if (score >= 70) return "yellow.400";
    return "red.400";
  };

  // PLATFORM ICONS
  const getPlatformIcon = (platform) => {
    switch (platform) {
      case "PC":
        return FaWindows;
      case "PlayStation":
        return FaPlaystation;
      case "Xbox":
        return FaXbox;
      case "macOS":
        return FaApple;
      case "Linux":
        return FaLinux;
      default:
        return null;
    }
  };

  return (
    <>
      <Box px={{ base: 3, md: 5 }} py={5}>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
          {games.map((game) => (
            <Card.Root
              key={game.id}
              overflow="hidden"
              borderRadius="2xl"
              bg={{ base: "gray.100", _dark: "gray.700" }}
              color={{ base: "gray.700", _dark: "gray.200" }}
              boxShadow="lg"
              border="1px solid"
              borderColor={{ base: "gray.200", _dark: "gray.700" }}
              transition="0.25s ease"
              h="100%"
              _hover={{
                transform: "translateY(-6px)",
                boxShadow: "2xl",
              }}
            >
              {/* IMAGE */}
              <Box overflow="hidden">
                <Image
                  src={game.background_image}
                  alt={game.name}
                  h="220px"
                  w="100%"
                  objectFit="cover"
                  transition="0.3s"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Box>

              <Card.Body
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                gap={4}
              >
                {/* TOP */}
                <Box>
                  {/* PLATFORM + SCORE */}
                  <Flex justify="space-between" align="center" mb={3}>
                    <Flex gap={2}>
                      {game.parent_platforms?.slice(0, 5).map((p) => {
                        const IconComponent = getPlatformIcon(p.platform.name);

                        return IconComponent ? (
                          <Icon
                            key={p.platform.id}
                            as={IconComponent}
                            color="gray.400"
                            boxSize={4}
                          />
                        ) : null;
                      })}
                    </Flex>

                    <Badge
                      border="1px solid"
                      borderColor={getScoreColor(game.metacritic)}
                      color={getScoreColor(game.metacritic)}
                      bg="transparent"
                      px={2}
                      py={1}
                      borderRadius="md"
                    >
                      {game.metacritic || "N/A"}
                    </Badge>
                  </Flex>

                  {/* TITLE */}
                  <Heading
                    fontSize="xl"
                    lineHeight="1.3"
                    mb={3}
                    noOfLines={2}
                    _hover={{
                      color: "gray.300",
                      cursor: "pointer",
                    }}
                  >
                    {game.name}
                  </Heading>

                  {/* GENRES */}
                  <Flex gap={2} wrap="wrap">
                    {game.genres?.slice(0, 3).map((genre) => (
                      <Badge
                        key={genre.id}
                        bg="gray.700"
                        color="gray.200"
                        px={2}
                        py={1}
                        borderRadius="md"
                        fontWeight="500"
                      >
                        {genre.name}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                {/* FOOTER */}
                <Text fontSize="sm" color="gray.400">
                  Popular Game
                </Text>
              </Card.Body>
            </Card.Root>
          ))}
        </SimpleGrid>
      </Box>

      {/* LOADER */}
      {loading && (
        <Center py={10}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.700"
            color="white"
            size="xl"
          />
        </Center>
      )}
    </>
  );
};

export default Cardgrid;
