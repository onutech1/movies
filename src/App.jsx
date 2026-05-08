import "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Nav from "./component/Nav";
import Cardgrid from "./component/Cardgrid";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `
          "header"
          "main"
        `,
        md: `
          "header header"
          "sidebar main"
        `,
      }}
      // Use "auto" so the header naturally hugs the height of your Nav component
      gridTemplateRows={{
        base: "auto 1fr",
      }}
      // Added minmax(0, 1fr) to prevent large content from breaking the grid
      gridTemplateColumns={{
        base: "1fr",
        md: "250px minmax(0, 1fr)",
      }}
      minH="100vh" // minH is safer than h to allow content to scroll naturally
    >
      {/* Header */}
      <GridItem area="header" as="header" zIndex="10">
        <Nav />
      </GridItem>

      {/* Sidebar */}
      <GridItem
        area="sidebar"
        as="aside"
        bg="bg.muted"
        borderRight="1px solid"
        borderColor="border"
        display={{ base: "none", md: "block" }} // Pure CSS hiding
        p={4}
      >
        <Sidebar />
      </GridItem>

      {/* Main Content */}
      <GridItem area="main" as="main" bg="bg.panel" p={6}>
        <Cardgrid />
      </GridItem>
    </Grid>
  );
}

export default App;
