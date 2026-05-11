import { Grid, GridItem } from "@chakra-ui/react";

import Nav from "./component/Nav";
import Sidebar from "./component/Sidebar";
import Cardgrid from "./component/Cardgrid";

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
      templateRows="auto 1fr"
      templateColumns={{
        base: "1fr",
        md: "240px minmax(0, 1fr)",
      }}
      minH="100vh"
      bg="gray.900"
    >
      {/* HEADER */}
      <GridItem area="header">
        <Nav />
      </GridItem>

      {/* SIDEBAR */}
      <GridItem
        area="sidebar"
        display={{ base: "none", md: "block" }}
        borderRight="1px solid"
        borderColor="gray.700"
        overflow="hidden"
      >
        <Sidebar />
      </GridItem>

      {/* MAIN CONTENT */}
      <GridItem area="main" overflowX="hidden">
        <Cardgrid />
      </GridItem>
    </Grid>
  );
}

export default App;
