import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import { Platforms } from "../Hooks/useFetchGame";
import CriticBadge from "./CriticBadge";

interface props {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  platforms: { platform: Platforms }[];
}

function GameCard({
  id,
  name,
  background_image,
  platforms,
  metacritic,
}: props) {
  return (
    <>
      <Card maxW={"sm"} margin={3} borderRadius={"xl"}>
        <Image src={background_image} alt="" borderTopRadius={"xl"}></Image>
        <CardBody>
          <HStack>
            <PlatformIcon platformIcon={platforms.map((p) => p.platform)} />
            <Spacer />
            <CriticBadge rating={metacritic} />
          </HStack>
          <Heading size="sm" textTransform="uppercase">
            {name}
          </Heading>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
