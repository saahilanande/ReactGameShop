import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: props) {
  const dynamicHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;

  return (
    <Heading fontSize={"5xl"} as={"h1"}>
      {dynamicHeading} Games
    </Heading>
  );
}

export default GameHeading;
