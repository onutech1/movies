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

  // Fetch Games
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
    fetchGames();
  }, [page]);

  // Infinite Scroll
  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100;

      if (bottom && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  // Metascore Color
  const getScoreColor = (score) => {
    if (score >= 85) return "green.400";
    if (score >= 70) return "yellow.400";
    return "red.400";
  };

  // Platform Icons
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
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        spacing={7}
        padding="20px"
      >
        {games.map((game) => (
          <Card.Root
            key={game.id}
            overflow="hidden"
            borderRadius="20px"
            bg="#202020"
            color="white"
            transition="0.3s"
            _hover={{
              transform: "scale(1.03)",
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
              />
            </Box>

            <Card.Body p={4}>
              {/* PLATFORM + METASCORE */}
              <Flex justify="space-between" align="center" mb={3}>
                {/* Platforms */}
                <Flex gap={2}>
                  {game.parent_platforms?.slice(0, 5).map((p) => {
                    const IconComponent = getPlatformIcon(p.platform.name);

                    return IconComponent ? (
                      <Icon
                        key={p.platform.id}
                        as={IconComponent}
                        color="gray.300"
                        boxSize={4}
                      />
                    ) : null;
                  })}
                </Flex>

                {/* Metascore */}
                <Badge
                  border="1px solid"
                  borderColor={getScoreColor(game.metacritic)}
                  color={getScoreColor(game.metacritic)}
                  bg="transparent"
                  px={2}
                  py={1}
                  borderRadius="8px"
                  fontSize="0.8rem"
                >
                  {game.metacritic || "N/A"}
                </Badge>
              </Flex>

              {/* TITLE */}
              <Heading
                fontSize="2xl"
                lineHeight="1.2"
                mb={3}
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
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>

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
