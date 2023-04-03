import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      >
        <GridItem area="nav" bg="gold">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg="black">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="orange.500">
          <GameGrid/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
