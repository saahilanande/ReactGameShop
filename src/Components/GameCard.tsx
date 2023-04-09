import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Spacer,
} from "@chakra-ui/react";
import PlatformIcon from "./PlatformIcon";
import { Platforms } from "../Hooks/useFetchGame";
import CriticBadge from "./CriticBadge";
import TotalDownloads from "./TotalDownloads";
import CropImage from "../Services/Url-Client";

interface props {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  added: number;
  platforms: { platform: Platforms }[];
}

function GameCard({
  id,
  name,
  background_image,
  platforms,
  metacritic,
  added,
}: props) {
  return (
    <>
      <Card
        maxW={"sm"}
        margin={3}
        borderRadius={"xl"}
        _hover={{ bg: "teal.700" }}
      >
        <Image
          src={CropImage(background_image)}
          alt=""
          borderTopRadius={"xl"}
        ></Image>
        <CardBody>
          <HStack flex={"wrap"} marginBottom={1}>
            <PlatformIcon platformIcon={platforms.map((p) => p.platform)} />
            <Spacer />
            <CriticBadge rating={metacritic} />
          </HStack>
          <Heading size="sm" textTransform="uppercase" marginBottom={2}>
            {name}
          </Heading>
          <TotalDownloads downloads={added} />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
