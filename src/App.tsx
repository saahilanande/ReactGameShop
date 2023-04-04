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
          <GridItem area="aside" bg="white">
            aside
          </GridItem>
        </Show>
        <GridItem area="main" bg="red.600">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
